package ru.itmo.gorshkov.web4_2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itmo.gorshkov.web4_2.data.Point;
import ru.itmo.gorshkov.web4_2.data.MyUser;
import ru.itmo.gorshkov.web4_2.data.UserRepository;
import ru.itmo.gorshkov.web4_2.util.BigDecimalToDouble;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/points")
public class PointsController {
    private final UserRepository repository;

    @Autowired
    public PointsController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Point> getPoints(Principal principal) {
        MyUser user = repository.findByUsername(principal.getName());
        return user.getPoints();
    }

    @PostMapping
    public Point addPoint(@Valid Point point, Principal principal) {
        MyUser user = repository.findByUsername(principal.getName());
        point.setResult(checkArea(point));
        user.addPoint(point);
        return point;
    }

    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<String> handleException(Exception e) {
        return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    public static int checkArea(Point point) {
        double x = BigDecimalToDouble.convert(point.getX());
        double y = BigDecimalToDouble.convert(point.getY());
        double r = BigDecimalToDouble.convert(point.getR());
        if (x < 0) {
            if (y > 0)
                return 0;
            else {
                if (y < -1 / 2 * x - r / 2)
                    return 0;
                else
                    return 1;
            }
        } else {
            if (y > 0) {
                if (Math.pow(x, 2) + Math.pow(y, 2) > Math.pow(r / 2, 2))
                    return 0;
                else
                    return 1;
            } else {
                if (x > r / 2 && y < -r)
                    return 0;
                else
                    return 1;
            }
        }
    }
}
