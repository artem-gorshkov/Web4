package ru.itmo.gorshkov.web4.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itmo.gorshkov.web4.data.MyUser;
import ru.itmo.gorshkov.web4.data.Point;
import ru.itmo.gorshkov.web4.data.PointDTO;
import ru.itmo.gorshkov.web4.data.UserRepository;
import ru.itmo.gorshkov.web4.mbeans.AreaOfShape;
import ru.itmo.gorshkov.web4.mbeans.CountPoints;
import ru.itmo.gorshkov.web4.util.BigDecimalToDouble;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/points")
public class PointsController {
    private final UserRepository repository;
    private final CountPoints countPoints;
    private final AreaOfShape areaOfShape;



    @Autowired
    public PointsController(UserRepository repository, CountPoints countPoints, AreaOfShape areaOfShape) {
        this.repository = repository;
        this.countPoints = countPoints;
        this.areaOfShape = areaOfShape;
    }

    @GetMapping
    public List<Point> getPoints(@RequestHeader("X-USER-ID") String username) {
        MyUser user = repository.findByUsername(username);
        return user.getPoints();
    }

    @PostMapping
    public PointDTO addPoint(@RequestBody PointDTO pointDTO,
                             @RequestHeader("X-USER-ID") String username) {
        @Valid
        Point point = pointFromDTO(pointDTO);
        MyUser user = repository.findByUsername(username);
        int result = checkArea(point);
        point.setResult(result);
        pointDTO.setResult(result);
        user.addPoint(point);
        repository.save(user);

        countPoints.updateCounters(result == 0);

        log.info("POST Point: " + point);
        return pointDTO;
    }

    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<String> handleException(Exception e) {
        return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    public static int checkArea(Point point) {
        double x = BigDecimalToDouble.convert(point.getX());
        double y = BigDecimalToDouble.convert(point.getY());
        double r = BigDecimalToDouble.convert(point.getR());
        boolean circle = Math.pow(x, 2) + Math.pow(y, 2) > Math.pow(r / 2, 2);
        if (r >= 0) {
            if (x < 0) {
                if (y > 0)
                    return 0;
                else {
                    if (y < -0.5 * x - r / 2)
                        return 0;
                    else
                        return 1;
                }
            } else {
                if (y > 0) {
                    if (circle)
                        return 0;
                    else
                        return 1;
                } else {
                    if (x > r / 2 || y < -r)
                        return 0;
                    else
                        return 1;
                }
            }
        }
        else {
            if (x > 0) {
                if (y < 0)
                    return 0;
                else {
                    if (y > -0.5 * x - r / 2)
                        return 0;
                    else
                        return 1;
                }
            } else {
                if (y < 0) {
                    if (circle)
                        return 0;
                    else
                        return 1;
                } else {
                    if (x > r / 2 && y < -r)
                        return 1;
                    else
                        return 0;
                }
            }
        }
    }

    public static Point pointFromDTO(PointDTO pointDTO) {
        Point point = new Point();
        point.setX(new BigDecimal(pointDTO.getX()));
        point.setY(new BigDecimal(pointDTO.getY()));
        point.setR(new BigDecimal(pointDTO.getR()));
        return point;
    }
}
