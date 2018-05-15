package com.example.demo.web;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author yang
 * @create_at 17-10-30
 **/
public class BaseController {
    @Autowired
    public org.springframework.core.env.Environment env;
    protected Session getSession(){

        return SecurityUtils.getSubject().getSession();

    }

}
