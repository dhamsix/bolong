package com.springapp.mvc.stat.controller;

import com.springapp.mvc.stat.service.StatService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/statlist")
public class StatController {
    @Autowired
    private StatService statService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop list(){
        DataShop dataShop = new DataShop();
        List list = statService.list();
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

 }
