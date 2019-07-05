package com.project.web.repositories;

import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Customerrepositories {
    @Autowired CustomerRepository raper;
    
    @Test
    public void countTest() throws Exception{
        long count = raper.count();
        //assertThat(Integer.parseInt(count +""),equals(31));
        
    }
}