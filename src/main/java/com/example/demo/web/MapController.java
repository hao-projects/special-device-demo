package com.example.demo.web;

import com.example.demo.entity.data.District;
import com.example.demo.entity.data.Organization;
import com.example.demo.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
/**
 * @author yang
 * @create_at 2017/10/17
 **/
@Controller
@RequestMapping("/map")
public class MapController {

    @Autowired
    private MapService mapService;

    @RequestMapping(value = "/provinces", method = RequestMethod.GET)
    public @ResponseBody
    List<District> getAllProvinces(){

        return mapService.findAllProvince();
    }
    @RequestMapping("/test")
    public String test(){
        return "districtMenu";
    }

    @RequestMapping(value = "/cities", method = RequestMethod.GET)
    public @ResponseBody
    List<District> getAllCities(@RequestParam("provinceCode") String code){
        return mapService.findAllCity(code);
    }

    @RequestMapping(value = "/areas", method = RequestMethod.GET)
    public @ResponseBody
    List<District> getAllAreas(@RequestParam("cityCode") String code){
        return mapService.findAllArea(code);
    }

    @RequestMapping("/organization")
    public @ResponseBody List<Organization> getOrganizations(@RequestParam("addressCode")String code){
        return mapService.findOrganizationsByCode(code);
    }
}
