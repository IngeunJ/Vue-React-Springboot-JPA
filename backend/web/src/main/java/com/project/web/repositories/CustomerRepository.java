package com.project.web.repositories;

import java.util.Optional;

import com.project.web.domain.CustomerDTO;
import com.project.web.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

	public CustomerDTO findByCustomerIdAndPassword(String customerId, String password);


}