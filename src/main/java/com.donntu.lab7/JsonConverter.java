package com.donntu.lab7;

import com.donntu.lab7.db.entities.Client;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.text.ParseException;
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

    public static Client convertJsonMapToClient(Map<String, String> json) throws ParseException {
        return new Client(
                json.get("fio"),
                json.get("passportNumber"),
                Long.valueOf(json.get("phoneNumber")),
                DateFormatter.parse("yyyy-MM-dd", json.get("arrivalDate")),
                DateFormatter.parse("yyyy-MM-dd", json.get("departureDate")),
                json.get("payForm"),
                DateFormatter.parse("yyyy-MM-dd", json.get("payDate")),
                json.get("payNote")
        );
    }

    public static String getSuccessMessage(boolean success) {
        if (success) {
            return "[{\"status\":\"ok\"}]";
        } else {
            return "[{\"status\":\"err\"}]";
        }
    }

    public static void fillClientFromJson(Map<String, String> json, Client client) {
        client.setFio(json.get("fio"));
        client.setPassportNumber(json.get("passportNumber"));
        client.setPhoneNumber(Long.valueOf(json.get("phoneNumber")));
        try {
            client.setArrivalDate(DateFormatter.parse("yyyy-MM-dd", json.get("arrivalDate")));
            client.getDepartureDate().setDate(DateFormatter.parse("yyyy-MM-dd", json.get("departureDate")));
            client.getPayment().setDate(DateFormatter.parse("yyyy-MM-dd", json.get("payDate")));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        client.getPayment().setForm(json.get("payForm"));
        client.getPayment().setNote(json.get("payNote"));
    }
}
