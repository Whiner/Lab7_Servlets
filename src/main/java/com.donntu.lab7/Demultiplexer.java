package com.donntu.lab7;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Demultiplexer {
    public static Object runGetter(String fieldName, Object o)
    {
        // MZ: Find the correct method
        for (Method method : o.getClass().getMethods())
        {
            if ((method.getName().startsWith("get")) && (method.getName().length() == (fieldName.length() + 3)))
            {
                if (method.getName().toLowerCase().endsWith(fieldName.toLowerCase()))
                {
                    // MZ: Method found, run it
                    try
                    {
                        return method.invoke(o);
                    }
                    catch (IllegalAccessException | InvocationTargetException e)
                    {
                        e.printStackTrace();
                    }

                }
            }
        }


        return null;
    }
}
