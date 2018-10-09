package com.donntu.lab7.controller;

import com.donntu.lab7.db.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping
public class ApplicationController {
    private ApplicationService applicationService;

    @Autowired
    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }


    @GetMapping("/total")
    public String getTotal() {
        return applicationService.getJson("total");
    }

    @GetMapping("/departure")
    public String getDepartureDates() {
        return applicationService.getJson("departure");
    }

    @GetMapping("/payment")
    public String getPayment() {
        return applicationService.getJson("payment");
    }

    @DeleteMapping("/total")
    public void deleteTotal(@RequestBody Map<String, String> id) {
        System.out.println(id);
    }

    @DeleteMapping("/payment")
    public void deletePayment(@RequestBody Map<String, String> id) {
        System.out.println(id);
    }

    @DeleteMapping("/departure")
    public void deleteDeparture(@RequestBody Map<String, String> id) {
        System.out.println(id);
    }

    @PostMapping("/total")
    public Map<String, String> putClient(@RequestBody Map<String, String> request) {
        System.out.println("save " + request);
        return request;
    }

    @PutMapping("/total")
    public Map<String, String> updateClient(@RequestBody Map<String, String> request) {
        System.out.println("update " + request);
        return request;
    }

    @GetMapping("/payment/{id}")
    public String getClientByPaymentId(@PathVariable Integer id) {
        return applicationService.getJsonClientByPaymentId(id);
    }

    @GetMapping("/total/{id}")
    public String getClientById(@PathVariable Integer id) {
        return applicationService.getJsonClientById(id);
    }

    @GetMapping("/departure/{id}")
    public String getClientByDepartureId(@PathVariable Integer id) {
        return applicationService.getJsonClientByDepartureId(id);
    }


}
