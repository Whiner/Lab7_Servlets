package com.donntu.lab7.db.repos;

import com.donntu.lab7.db.entities.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, Long> {

}
