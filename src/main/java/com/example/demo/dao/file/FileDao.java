package com.example.demo.dao.file;

import com.example.demo.entity.data.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by yang on 2017/8/12.
 */
public interface FileDao  extends JpaRepository<FileData,Integer>{
    FileData findFileDataById(long id);

}
