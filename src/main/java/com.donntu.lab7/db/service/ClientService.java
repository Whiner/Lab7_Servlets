package com.donntu.lab7.db.service;

import com.donntu.lab7.Converter;
import com.donntu.lab7.db.entities.Client;
import com.donntu.lab7.db.repos.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ClientService {
    private ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClients(){
        return Converter.toList(clientRepository.findAll());
    }

    public List<Map<String, String>> getTotalMap(){
        return Converter.toListMap(getAllClients());
    }

}
