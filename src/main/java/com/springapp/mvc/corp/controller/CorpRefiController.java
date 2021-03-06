package com.springapp.mvc.corp.controller;

import com.springapp.mvc.corp.service.CorpService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corprefilist")
public class CorpRefiController {
    @Autowired
    private CorpService corpService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "nos", required = false, defaultValue = "") String nos,
            @RequestParam(value = "buslicno", required = false, defaultValue = "") String buslicno,
            @RequestParam(value = "listcode", required = false, defaultValue = "") String listcode
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpService.listRefi(name, nos, buslicno, listcode);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
