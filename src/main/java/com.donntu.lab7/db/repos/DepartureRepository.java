package com.donntu.lab7.db.repos;

import com.donntu.lab7.db.entities.DepartureDate;
import org.springframework.data.repository.CrudRepository;

public interface DepartureRepository extends CrudRepository<DepartureDate, Long> {
}
