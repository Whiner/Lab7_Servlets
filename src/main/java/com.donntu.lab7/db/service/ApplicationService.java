package com.donntu.lab7.db.service;

import com.donntu.lab7.Converter;
import com.donntu.lab7.JsonConverter;
import com.donntu.lab7.db.entities.Client;
import com.donntu.lab7.db.repos.ClientRepository;
import com.donntu.lab7.db.repos.DepartureRepository;
import com.donntu.lab7.db.repos.PaymentRepository;
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
        return JsonConverter.convert(getAllClients());
    }

    private String getDepartureJson() {
        return JsonConverter.convert(departureRepository.findAll());
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
        return JsonConverter.convert(paymentRepository.findAll());
    }

    public String getJsonClientByPaymentId(Integer integer) {
        return JsonConverter.convert(clientRepository.findByPaymentId(integer));
    }

    public String getJsonClientById(Integer id) {
        return JsonConverter.convert(clientRepository.findById(id));
    }

    public String getJsonClientByDepartureId(Integer id) {
        return JsonConverter.convert(clientRepository.findByDepartureDateId(id));
    }
}
