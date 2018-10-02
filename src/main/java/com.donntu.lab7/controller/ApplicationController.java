package com.donntu.lab7.controller;

import com.donntu.lab7.db.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
