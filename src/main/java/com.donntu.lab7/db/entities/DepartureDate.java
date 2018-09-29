package com.donntu.lab7.db.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class DepartureDate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Date date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id")
    private Client client;


    public DepartureDate(Date date, Client client) {
        this.date = date;
        this.client = client;
    }

    public DepartureDate() {
    }

    @Override
    public String toString() {
        return date.toString();
    }
}
