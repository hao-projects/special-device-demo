package com.example.demo.web;

import com.example.demo.connector.conditions.ApplyConditions;
import com.example.demo.connector.conditions.DeviceConditions;
import com.example.demo.connector.responser.ApplyResponse;
import com.example.demo.connector.responser.DeviceResponse;
import com.example.demo.dao.apply.ApplySearchCondition;
import com.example.demo.dao.device.DeviceSearchCondition;
import com.example.demo.dao.device.MultiDeviceDao;
import com.example.demo.entity.device.DeviceInfo;
import com.example.demo.entity.form.SubForm;
import com.example.demo.enums.CustomePage;
import com.example.demo.enums.JsonResponse;
import com.example.demo.service.DeviceService;
import com.example.demo.service.FileService;
import com.example.demo.service.UserStatusService;
import com.example.demo.service.exception.CustomException;
import com.example.demo.service.impl.FileServiceImpl;
import com.example.demo.service.utils.FilePathUtil;
import com.example.demo.service.utils.UtilServiceImpl;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.session.Session;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * @author yang
 * @create_at 17-10-24
 **/
@Controller
@RequestMapping("/device")
//@RequiresPermissions("user:normal")
public class DeviceController extends BaseController{
    @Autowired
    @Qualifier(value = "productEntityManager")
    private EntityManager em;
    @Autowired
    private DeviceService deviceService;
    @Autowired
    private UserStatusService statusService;
    @Autowired
    private FileService fileService;


    @RequestMapping(value = "/get",method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse getDeviceLists(@RequestBody DeviceConditions conditions)throws Exception{
        long id=statusService.getCurrUserId(getSession());
        conditions.setUserId(id);
        conditions.setOrderBy(1);
        if(!conditions.isProcessing()){
            conditions.setViewAll(false);
        }
        DeviceSearchCondition searchCondition=new DeviceSearchCondition(conditions);
        CustomePage<DeviceResponse> devices=null;
        if(conditions.getSize()==0){
             devices= searchCondition.result(searchCondition.searchByConditions(em));
        }else{
            Pageable pageable = new PageRequest(conditions.getPage(), conditions.getSize(), conditions.getSort());
            devices = searchCondition.result(searchCondition.searchByConditions(em),pageable);}
        return new JsonResponse(200,null,devices);

    }

    @RequestMapping(value = "/getExcel",method = RequestMethod.GET)
    public void getDeviceLists2Excel(HttpServletRequest request, HttpServletResponse response){
        long id=statusService.getCurrUserId(getSession());
        DeviceConditions conditions = new DeviceConditions();
        conditions.setUserId(id);
        conditions.setOrderBy(1);
        DeviceSearchCondition searchCondition=new DeviceSearchCondition(conditions);

        List<? extends DeviceInfo> deviceInfos = null;
        try {
            deviceInfos = searchCondition.searchByConditions(em);
        } catch (Exception e) {
            e.printStackTrace();
        }
        fileService.deviceLists2Excel(deviceInfos);
        File file = new File(env.getProperty("file.excel.path")+"template1.xls");
        if(file.isFile() && file.exists()) {
            String fileName = "总设备列表.xls";
            try (OutputStream os = response.getOutputStream();
                 FileInputStream fo = new FileInputStream(file)) {
                response.setHeader("content-type", "application/x-xls");
                response.setContentType("application/x-xls");
                if(request.getHeader("user-agent").toLowerCase().contains("firefox")){
                    response.setHeader("Content-Disposition", "attachment;filename=" +
                            new String(fileName.getBytes("utf-8"),"ISO-8859-1"));
                }else{
                    response.setHeader("Content-Disposition","attachment;filename="+
                            URLEncoder.encode(fileName,"utf-8"));
                }

                byte[] bis = UtilServiceImpl.readStream(fo);
                os.write(bis);
                os.flush();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else{

        }

    }


    @RequestMapping(value = "/get",method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getDevice(@RequestParam(name = "deviceId")long deviceId){

        return new JsonResponse(200,null,deviceService.getDeviceById(deviceId,getSession()));
    }
    @Autowired
    private MultiDeviceDao deviceDao;
    @RequestMapping(value = "/pipe",method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getPipe(@RequestParam("eqCode")String eqcode){
        return new JsonResponse(200,null,deviceService.getPipeByEqCode(getSession(),eqcode));
    }
    @RequestMapping(value = "/cylinder",method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getCylinder(@RequestParam(name="eqCode")String eqcode){
        return new JsonResponse(200,null,deviceService.getCylinderByEqCode(getSession(),eqcode));
    }
    @RequestMapping(value = "/pipe",method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse updatePipe(@RequestBody SubForm pipe){
        if(deviceService.getPipeByEqCode(getSession(),pipe.getEqCode())==null){
            throw new CustomException("you do not have permission to do the operation");
        }
        pipe.setOwnerId(statusService.getCurrUserId(getSession()));
        return new JsonResponse(200,null,deviceService.updateSubForm(pipe));
    }
    @RequestMapping(value = "/cylinder",method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse updateCylinder(@RequestBody SubForm cylinder){
        SubForm cylinder2=deviceService.getCylinderByEqCode(getSession(),cylinder.getEqCode());
        if(cylinder2==null){
            throw new CustomException("you do not have permission to do the operation");
        }
        cylinder.setOwnerId(cylinder2.getOwnerId());
        cylinder.setId(cylinder2.getId());
        return new JsonResponse(200,null,deviceService.updateSubForm(cylinder));
    }
}
