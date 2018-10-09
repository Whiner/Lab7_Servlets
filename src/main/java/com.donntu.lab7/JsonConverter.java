package com.donntu.lab7;

import com.donntu.lab7.db.entities.Client;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Map;

public class JsonConverter {
    public static String convert(Object obj) {
        try {
            return new ObjectMapper().writer().writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static Client convertJsonMapToClient(Map<String, String> string) {
        Client client = new Client();
        return null;
    }
}
