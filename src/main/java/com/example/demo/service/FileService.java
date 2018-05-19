package com.example.demo.service;

import com.example.demo.connector.responser.WorkFlowInfo;
import com.example.demo.entity.data.ApplyInfo;
import com.example.demo.entity.data.FileData;
import com.example.demo.entity.device.DeviceInfo;
import com.example.demo.enums.FormTypeEnum;

import java.util.List;
import java.util.Map;

/**
 * @author yang
 * @create_at 2017/10/17
 **/
public interface FileService {
    FileData getFileById(long id);
    void    save(FileData fileData);
    void    delete(FileData fileData);
    Map<FormTypeEnum,Long> createPdf(ApplyInfo applyInfo);
    long form2pdf(Object form,int form_type,long apply_id) ;
    void deviceLists2Excel(List<? extends DeviceInfo> deviceInfos) ;
    void approvedApplies2Excel(List<WorkFlowInfo> lists);
}
