package com.project.web.service;

import java.util.Optional;

import com.project.web.domain.CustomerDTO;
import com.project.web.entities.Customer;
import com.project.web.repositories.CustomerRepository;
import com.project.web.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired 
    CustomerRepository customerRepository;

    public long	count(){
        return customerRepository.count();
    }
  
    public void	delete(Customer entity){
         customerRepository.delete(entity);
    }
   
    public void	deleteAll(){
        customerRepository.deleteAll();
    }
    
    public void	deleteAll(Iterable<Customer> entities){
        customerRepository.deleteAll(entities);
    }
   
    public void	deleteById(Long id){
        customerRepository.deleteById(id);
    }

    public boolean	existsById(Long id){
        return customerRepository.existsById(id);
    }
    
    public Iterable<Customer>	findAll(){
        return customerRepository.findAll();
    }
    
    public Iterable<Customer>	findAllById(Iterable<Long> ids){
        return customerRepository.findAllById(ids);
    }
    
    public Optional<Customer>	findById(Long id){
        System.out.println("서비스로 넘어온 아이디: "+id);
        return customerRepository.findById((long)id);
    }
    
    
    public Customer save(Customer entity){
        return customerRepository.save(entity);
    }
  
    
    public Iterable<Customer> saveAll(Iterable<Customer> entities){
        return customerRepository.saveAll(entities);
    }
 
}