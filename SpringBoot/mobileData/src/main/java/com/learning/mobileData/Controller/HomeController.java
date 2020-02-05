package com.learning.mobileData.Controller;

import com.learning.mobileData.Model.HomeModel;
import com.learning.mobileData.Repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("")
public class HomeController {
    @Autowired
    HomeRepository homeRepository;
    @GetMapping("/home")
    public List<HomeModel> getHome(@RequestParam String sortByName, @RequestParam String sortByPrice){
     //   System.out.println(sortByName+"  , "+sortByPrice);
        Integer price =0;
        if(sortByPrice!="") {
            try {
                price = Integer.parseInt(sortByPrice);
            } catch (NumberFormatException nme) {
               price =0;
            }
        }
        List<HomeModel> data;
        if(sortByName!="" && price>0){
            data = homeRepository.findByNameAndPriceGreaterThanEqual(sortByName,price);
        }
        else if(sortByName!=""){
            data = homeRepository.findByName(sortByName);
        }
        else if(price>0){
            data = homeRepository.findByPriceGreaterThanEqual(price);
        }
        else {
            data  = homeRepository.findAll();
        }
        return data;
    }
    @GetMapping("/getPhone/{id}")
    public HomeModel getById(@PathVariable("id") String id){
        HomeModel data = homeRepository.findById(id).get();
        return data;
    }
}
