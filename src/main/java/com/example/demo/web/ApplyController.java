package com.example.demo.web;

import com.example.demo.connector.responser.ApplyResponse;
import com.example.demo.connector.conditions.ApplyConditions;
import com.example.demo.connector.responser.WorkFlowInfo;
import com.example.demo.connector.updater.ApplyUpdater;
import com.example.demo.connector.updater.DropOrStopApplyHandler;
import com.example.demo.entity.data.ApplyInfo;
import com.example.demo.entity.data.ApplyStatus;
import com.example.demo.entity.form.Form;
import com.example.demo.entity.form.SubForm;
import com.example.demo.enums.FormTypeEnum;
import com.example.demo.enums.JsonResponse;
import com.example.demo.dao.apply.ApplySearchCondition;
import com.example.demo.enums.CustomePage;
import com.example.demo.service.ApplyService;
import com.example.demo.service.DeviceService;
import com.example.demo.service.UserStatusService;
import com.example.demo.service.utils.UtilServiceImpl;

import org.apache.shiro.SecurityUtils;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.session.Session;
import org.hibernate.Hibernate;
import org.json.JSONObject;
import org.springframework.aop.framework.AopContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

/**
 * @author yang
 * @create_at 2017/10/17
 **/
@Controller
@RequestMapping("/apply")
@RequiresPermissions("user:normal")
public class ApplyController extends BaseController {
    @Autowired
    @Qualifier(value = "productEntityManager")
    private EntityManager em;
    @Autowired
    private ApplyService applyService;
    @Autowired
    private UserStatusService statusService;

    @RequestMapping(value = "/get", method = RequestMethod.POST)
    //@JsonView(View.ApplyForView.class)
    public @ResponseBody
    JsonResponse getApplyList(@RequestBody ApplyConditions applyConditions) throws Exception {

        long userId = statusService.getCurrUserId(getSession());
        applyConditions.setOrderBy(1);//default order by desc id
        applyConditions.setUserId(userId);
        ApplySearchCondition searchCondition = new ApplySearchCondition(applyConditions);
        Pageable pageable = new PageRequest(applyConditions.getPage(), applyConditions.getSize(), applyConditions.getSort());
        CustomePage<ApplyResponse> applyInfos = searchCondition.result(searchCondition.converter2ApplyResponse(em), pageable);
        return new JsonResponse(200, null, applyInfos);

    }

    @Transactional
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public JsonResponse getApplyAPI(@RequestParam(value = "applyId", required = false) String id, @RequestParam(value = "eqCode", required = false) String eqCode) {
        ApplyInfo applyInfo = ((ApplyController) AopContext.currentProxy()).getApply(id, eqCode);
        return new JsonResponse(200, null, applyInfo);
    }

    @Transactional
    public ApplyInfo getApply(String applyId, String eqCode) {
        ApplyInfo applyInfo = null;
        if (applyId != null) {
            applyInfo = applyService.findByApplyID(Long.parseLong(applyId), getSession());
        } else {
            applyInfo = applyService.findApplyByEqCode(eqCode,getSession());
        }
        if (applyInfo != null) {
            for (Form form : applyInfo.getFormList()) {
                new JSONObject(form).toString();
            }
        }
        return applyInfo;
    }

    @RequestMapping(value = "/getWorkFlow", method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse getWorkFlow(@RequestBody ApplyConditions applyConditions) throws Exception {
        long userId = statusService.getCurrUserId(getSession());
        applyConditions.setUserId(userId);
        applyConditions.setOrderBy(1);
        ApplySearchCondition searchCondition = new ApplySearchCondition(applyConditions);
        Pageable pageable = new PageRequest(applyConditions.getPage(), applyConditions.getSize(), applyConditions.getSort());
        CustomePage<WorkFlowInfo> applyInfos = searchCondition.result(searchCondition.convert2Workflow(em), pageable);
        return new JsonResponse(200, null, applyInfos);
    }

    @RequestMapping(value = {"/drop", "/disable"}, method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse createDropOrDisableApply(@RequestBody DropOrStopApplyHandler handler) {
        ApplyInfo applyInfo = handler.getApply();
        applyInfo = applyService.createApply(applyInfo, statusService.getCurrUserId(getSession()));
        Map<String, String> map = new HashMap<>();
        map.put("applyId", applyInfo.getId() + "");
        map.put("forms", applyInfo.getForms().toString());
        return new JsonResponse(200, null, map);

    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse createApply(@RequestBody ApplyInfo applyInfo) throws Exception {
        applyInfo.setCreateTime(UtilServiceImpl.date2Long(new Date()));
        applyInfo.setStatus(new ApplyStatus());
        applyInfo = applyService.createApply(applyInfo, statusService.getCurrUserId(getSession()));
        Map<String, String> map = new HashMap<>();
        map.put("applyId", applyInfo.getId() + "");
        map.put("forms", applyInfo.getForms().toString());
        return new JsonResponse(200, null, map);

    }

    @RequestMapping(value = "/saveFirst", method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse firstSaveApply(@RequestBody ApplyInfo applyInfo) throws Exception {
        applyInfo.setCreateTime(UtilServiceImpl.date2Long(new Date()));
        applyInfo.setStatus(new ApplyStatus());
        applyInfo = applyService.firstSaveApply(applyInfo, statusService.getCurrUserId(getSession()));
        Map<String, String> map = new HashMap<>();
        map.put("applyId", applyInfo.getId() + "");
        map.put("forms", applyInfo.getForms().toString());
        return new JsonResponse(200, null, map);

    }

    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse delApply(@RequestParam("applyId") long id) throws RuntimeException {
        applyService.delApply(id, SecurityUtils.getSubject().getSession());
        return new JsonResponse();

    }

    @RequestMapping(value = "/cancel", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse cancelApply(@RequestParam("applyId") long id) throws RuntimeException {
        applyService.cancelApply(id, SecurityUtils.getSubject().getSession());
        return new JsonResponse();

    }

    @Transactional
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse updateApply(@RequestBody ApplyUpdater updater) throws RuntimeException {
        Session session = getSession();
        System.out.println(updater.getFormList().get(0).getEqUseDate());
        ApplyInfo applyInfo = ((ApplyController) AopContext.currentProxy()).getApply(updater.getId() + "", null);
        updater.update(applyInfo);
        ApplyInfo applyInfo1 = applyService.updateForm(applyInfo, session);
        Map<String, Object> map = new HashMap<>();
        map.put("applyId", applyInfo1.getId() + "");
        map.put("forms", applyInfo1.getForms());
        map.put("files", applyInfo1.getFiles());
        return new JsonResponse(200, null, map);
    }

    //重写保存接口,不要走pdf接口
    @Transactional
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public @ResponseBody
    JsonResponse saveApply(@RequestBody ApplyUpdater updater) throws RuntimeException {
        Session session = getSession();
        System.out.println(updater.getFormList().get(0).getEqUseDate());
        ApplyInfo applyInfo = ((ApplyController) AopContext.currentProxy()).getApply(updater.getId() + "", null);
        updater.update(applyInfo);
        ApplyInfo applyInfo1 = applyService.saveApply(applyInfo, session);
        Map<String, Object> map = new HashMap<>();
        map.put("applyId", applyInfo1.getId() + "");
        map.put("forms", applyInfo1.getForms());
        map.put("files", applyInfo1.getFiles());
        return new JsonResponse(200, null, map);
    }

    @Transactional
    @RequestMapping(value = "/uploadData", method = RequestMethod.POST)
    public @ResponseBody
    Callable<JsonResponse> updateApplyWithFile(MultipartHttpServletRequest request, @RequestParam(name = "applyId") long applyId) throws Exception {
        return () -> {
            ApplyInfo applyInfo = applyService.updateApply(request.getFile("file"), applyId, getSession());
            Map<String, String> data = new HashMap<>();
            long file_id;
            if (applyInfo.getForms().get(FormTypeEnum.气瓶基本信息汇总表) != null) {
                file_id = applyInfo.getForms().get(FormTypeEnum.气瓶基本信息汇总表);
            } else {
                file_id = applyInfo.getForms().get(FormTypeEnum.压力管道基本信息汇总表);
            }
            data.put("thumbnail", "/file/thumbnail?fileId=" + (file_id + ""));
            data.put("preview", "/file/preview?fileId=" + (file_id + ""));
            data.put("download", "/file/download?fileId=" + (file_id + ""));
            return new JsonResponse(200, null, data);
        };
        //getApply(applyInfo.getId()+"",null);
    }

    @Autowired
    private DeviceService deviceService;

    @RequestMapping(value = "/confirm", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse confirmApply(@RequestParam("applyId") long id) throws Exception {
        Session session = getSession();
        applyService.confirmApply(id, session);
        ApplyInfo applyInfo = applyService.findByApplyID(id, session);
        return new JsonResponse();

    }
//    @RequestMapping(value = "/formPreview",method = RequestMethod.GET)
//    public void previewForms(@RequestParam("formId")int formId,@RequestParam("applyId")int applyId){
//        ApplyInfo applyInfo=new ApplyInfo();
//
//    }

}
