package com.example.demo.entity.userModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
public class UserData implements Serializable{
    @Id@GeneratedValue
    private Integer id;
}
