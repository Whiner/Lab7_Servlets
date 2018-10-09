package com.donntu.lab7;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatter {
    public static String format(String pattern, Date date) {
        return new SimpleDateFormat(pattern).format(date);
    }

    public static Date parse(String pattern, String date) throws ParseException {
        return new SimpleDateFormat(pattern).parse(date);
    }
}
