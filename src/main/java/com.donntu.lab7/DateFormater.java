package com.donntu.lab7;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormater {
    public static String format(String pattern, Date date) {
        return new SimpleDateFormat(pattern).format(date);
    }
}
