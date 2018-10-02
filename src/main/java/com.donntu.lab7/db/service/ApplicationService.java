package com.donntu.lab7.db.service;

import com.donntu.lab7.Converter;
import com.donntu.lab7.db.entities.Client;
import com.donntu.lab7.db.repos.ClientRepository;
import com.donntu.lab7.db.repos.DepartureRepository;
import com.donntu.lab7.db.repos.PaymentRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ApplicationService {
    private ClientRepository clientRepository;
    private DepartureRepository departureRepository;
    private PaymentRepository paymentRepository;

    @Autowired
    public ApplicationService(ClientRepository clientRepository, DepartureRepository departureRepository, PaymentRepository paymentRepository) {
        this.clientRepository = clientRepository;
        this.departureRepository = departureRepository;
        this.paymentRepository = paymentRepository;
    }

    private List<Client> getAllClients() {
        return Converter.toList(clientRepository.findAll());
    }

    public List<Map<String, String>> getTotalMap() {
        return Converter.toListMap(getAllClients());
    }

    private String getTotalJson() {
        try {
            return new ObjectMapper().writer().writeValueAsString(getAllClients());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getDepartureJson() {
        try {
            return new ObjectMapper().writer().writeValueAsString(departureRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getJson(String tableType) {
        switch (tableType) {
            case "total":
                return getTotalJson();
            case "departure":
                return getDepartureJson();
            case "payment":
                return getPaymentJson();
            default:
                return null;
        }
    }

    private String getPaymentJson() {
        try {
            return new ObjectMapper().writer().writeValueAsString(paymentRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
