package com.example.demo.service;

import com.example.demo.connector.conditions.DeviceConditions;
import com.example.demo.entity.data.ApplyInfo;
import com.example.demo.entity.device.CylindersInfo;
import com.example.demo.entity.device.DeviceInfo;
import com.example.demo.entity.device.PipesInfo;
import com.example.demo.entity.form.Form;
import com.example.demo.entity.user.UserInfo;
import com.example.demo.enums.CustomePage;
import com.example.demo.enums.DeviceTypeEnum;
import org.apache.shiro.session.Session;

import java.util.List;

/**
 * @author yang
 * @create_at 17-10-26
 **/
public interface DeviceService {
    DeviceInfo  getDeviceById(long id,Session session);
    DeviceInfo  save(DeviceInfo deviceInfo);
    List<DeviceInfo> getOwnerDevices(Session session);
    long deviceTotalNum(DeviceTypeEnum deviceTypeEnum);
    void device2Apply(long deviceId, ApplyInfo apply);
    void createDevice(ApplyInfo applyInfo)throws Exception;
     PipesInfo getPipeByEqCode(String pipeCode);
    List<PipesInfo> getPipeListByOwner(UserInfo userInfo);
    CylindersInfo getCylinderByEqCode(String code);
    List<CylindersInfo> getCylinderByEqCode(UserInfo userInfo);

}
