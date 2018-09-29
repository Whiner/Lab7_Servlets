package com.donntu.lab7.db.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Payment{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Date date;

    private String form;

    private String note;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id")
    private Client client;


    public Payment() {
    }

    public Payment(Date date, String form, String note, Client client) {
        this.date = date;
        this.form = form;
        this.note = note;
        this.client = client;
    }

    @Override
    public String toString() {
        return date + "/" + form;
    }
}
