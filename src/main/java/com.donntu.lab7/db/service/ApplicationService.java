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
import java.util.Optional;

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

    public String getJsonClientByPaymentId(Long id) {
        return JsonConverter.convert(clientRepository.findByPaymentId(id));
    }

    public String getJsonClientById(Long id) {
        Optional<Client> byId = clientRepository.findById(id);
        return byId.map(JsonConverter::convert).orElse(null);
    }

    public String getJsonClientByDepartureId(Long id) {
        return JsonConverter.convert(clientRepository.findByDepartureDateId(id));
    }

    public String updateClient(Map<String, String> request) {
        try {
            Long id = Long.valueOf(request.get("id"));
            if (clientRepository.existsById(id)) {
                Optional<Client> byId = clientRepository.findById(id);
                if (byId.isPresent()) {
                    Client client = byId.get();
                    JsonConverter.fillClientFromJson(request, client);
                    clientRepository.save(client);
                }
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            return JsonConverter.getSuccessMessage(false);
        }
        return JsonConverter.getSuccessMessage(true);
    }

    public String putClient(Map<String, String> request) {
        try {
            clientRepository.save(JsonConverter.convertJsonMapToClient(request));
        } catch (Exception e) {
            return JsonConverter.getSuccessMessage(false);
        }
        return JsonConverter.getSuccessMessage(true);
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public void deleteDepDate(Long id) {
        departureRepository.deleteById(id);
    }
}
