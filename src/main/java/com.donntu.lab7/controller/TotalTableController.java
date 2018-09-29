package com.donntu.lab7.controller;

import com.donntu.lab7.db.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("total")
public class TotalTableController {
    private ClientService clientService;

    @Autowired
    public TotalTableController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Map<String, String>> getAll(){
        return clientService.getTotalMap();
    }
}
