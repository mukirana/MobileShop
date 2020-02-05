package com.learning.mobileData.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Mobiles")
public class HomeModel {

    @Id
    String _id;
    String name;
    String model;
    int price;
    String image;
    List<String> camera;
    String processor;
    String battery;
    String batteryDescription;
    List<String> userComments;
}
