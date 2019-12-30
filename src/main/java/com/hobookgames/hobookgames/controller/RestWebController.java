package com.hobookgames.hobookgames.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hobookgames.hobookgames.model.Customer;

@RestController
public class RestWebController {

    List<Customer> cust = new ArrayList<Customer>();

    @RequestMapping(value = "/getallcustomer", method = RequestMethod.GET)
    public List<Customer> getResource(){
        return cust;
    }

    @RequestMapping(value="/postcustomer", method=RequestMethod.POST)
    public String postCustomer(@RequestBody Customer customer){
        cust.add(customer);

        return "Sucessful!";
    }
}