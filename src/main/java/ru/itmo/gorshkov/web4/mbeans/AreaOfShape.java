package ru.itmo.gorshkov.web4.mbeans;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jmx.export.annotation.ManagedAttribute;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

@ManagedResource
@Component
@ToString
@EqualsAndHashCode
@Slf4j
public class AreaOfShape implements AreaOfShapeMBean {
    private double area;

    public void calculateArea(double r) {
        area = Math.pow(r, 2) * (Math.PI / 8 + 0.75);
        log.info("calculate area: " + area);
    }

    @ManagedAttribute
    public double getArea() {
        return area;
    }
}
