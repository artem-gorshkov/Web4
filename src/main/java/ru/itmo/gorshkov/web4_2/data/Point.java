package ru.itmo.gorshkov.web4_2.data;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.math.BigDecimal;

@Data
@Entity
public class Point {
    @Id
    @GeneratedValue
    private Long id;
    @DecimalMin("-7.5")
    @DecimalMax("7.5")
    private BigDecimal x;
    @DecimalMin("-7.5")
    @DecimalMax("7.5")
    private BigDecimal y;
    @DecimalMin("-5")
    @DecimalMax("3")
    private BigDecimal r;
    @Min(0)
    @Max(1)
    private int result;
    public Point() { }
}

