package com.donntu.lab7.db.repos;

import com.donntu.lab7.db.entities.Payment;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {

}
