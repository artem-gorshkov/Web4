package ru.itmo.gorshkov.web4_2.util;

import java.math.BigDecimal;

public class BigDecimalToDouble {
    public static double convert(BigDecimal decimal) {
        String str = decimal.toString().substring(0,10);
        return Double.parseDouble(str);
    }
}
