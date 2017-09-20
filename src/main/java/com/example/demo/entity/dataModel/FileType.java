package com.example.demo.entity.dataModel;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;

@Entity
public class FileType implements Serializable{
    @Id
    @GeneratedValue
    private Integer id;
    private String type;
    private String description;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}