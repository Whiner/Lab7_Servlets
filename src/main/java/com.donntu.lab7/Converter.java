package com.donntu.lab7;

import java.lang.reflect.Field;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class Converter {
    public static <T> List<T> toList(final Iterable<T> iterable) {
        return StreamSupport.stream(iterable.spliterator(), false)
                .collect(Collectors.toList());
    }

    public static List<Map<String, String>> toListMap(List<?> objects) {
        List<Map<String, String>> listMap = new ArrayList<>();
        for (Object object : objects) {
            Field[] fields = object.getClass().getDeclaredFields();
            Map<String, String> map = new HashMap<>();
            for (Field field : fields) {
                field.setAccessible(true);
                map.put(field.getName(), Objects.requireNonNull(Demultiplexer.runGetter(field.getName(), object)).toString());
            }
            listMap.add(map);
        }
        return listMap;
    }
}
