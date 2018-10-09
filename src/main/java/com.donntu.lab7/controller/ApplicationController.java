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
        applicationService.deleteClient(Long.valueOf(id.get("id")));
    }

    @DeleteMapping("/payment")
    public void deletePayment(@RequestBody Map<String, String> id) {
        applicationService.deletePayment(Long.valueOf(id.get("id")));
    }

    @DeleteMapping("/departure")
    public void deleteDeparture(@RequestBody Map<String, String> id) {
        applicationService.deleteDepDate(Long.valueOf(id.get("id")));
    }

    @PostMapping("/total")
    public String putClient(@RequestBody Map<String, String> request) {
        return applicationService.putClient(request);
    }

    @PutMapping("/total")
    public String updateClient(@RequestBody Map<String, String> request) {
        return applicationService.updateClient(request);
    }

    @GetMapping("/payment/{id}")
    public String getClientByPaymentId(@PathVariable Long id) {
        return applicationService.getJsonClientByPaymentId(id);
    }

    @GetMapping("/total/{id}")
    public String getClientById(@PathVariable Long id) {
        return applicationService.getJsonClientById(id);
    }

    @GetMapping("/departure/{id}")
    public String getClientByDepartureId(@PathVariable Long id) {
        return applicationService.getJsonClientByDepartureId(id);
    }


}
