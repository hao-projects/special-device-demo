package com.example.demo.service.utils;

import com.example.demo.entity.data.ApplyInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.File;
import java.util.Map;
import java.util.Set;

public class FilePathUtil {
//    @Value("#{file_save_dir}")
    public static String getPathById(long id,String path){
//        String path=ClassLoader.getSystemResource("").getPath();
//        String path=env.getProperty("file_save_dir");
        path=path+id/5000+"//";
        File file=new File(path);
        if(!file.exists())
        {
            file.mkdir();
        }

        return  path+id;
    }
    public static long getFileId(String fileName, ApplyInfo applyInfo){
        long applyId=applyInfo.getId();
        Map<String,Long> files=applyInfo.getFiles();
        if(files.get(fileName)!=null)
        {
            return files.get(fileName);
        }
        else{
            long fileId=applyId*100+30L;
            for(String name:files.keySet()){
                if(files.get(name)>=fileId)
                {
                    fileId=files.get(name)+1;
                }
            }

            files.put(fileName,fileId);
        }
        return files.get(fileName);
    }
}
