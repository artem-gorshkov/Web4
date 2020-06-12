package ru.itmo.gorshkov.web4_2.mbeans;

import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@ManagedResource
@Component
public class AreaOfShape {
    private double area;
    public void calculateArea(BigDecimal r) {

    }
}
