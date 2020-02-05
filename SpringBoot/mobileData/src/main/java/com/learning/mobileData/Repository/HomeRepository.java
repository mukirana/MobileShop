package com.learning.mobileData.Repository;

import com.learning.mobileData.Model.HomeModel;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HomeRepository extends MongoRepository<HomeModel,String> {
    List<HomeModel> findByName(String sortByName);

    List<HomeModel> findByPriceGreaterThanEqual(Integer sortByPrice);

    List<HomeModel> findByNameAndPriceGreaterThanEqual(String sortByName, Integer sortByPrice);
}
