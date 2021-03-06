package com.springapp.mvc.CorpImg;

/**
 * Created by xwq on 14-4-15.
 */

import common.util.DBInfo;
import common.util.DataShop;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_corp_shareholder_info")
public class AddCorpShareholderInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "gd_corp_id", required = false) Integer gd_corp_id,
            @RequestParam(value = "gd_shtype", required = false) String gd_shtype,
            @RequestParam(value = "gd_shname", required = false) String gd_shname,
            @RequestParam(value = "gd_shdoctype", required = false) String  gd_shdoctype,
            @RequestParam(value = "gd_shdocnum", required = false) String gd_shdocnum,
            @RequestParam(value = "gd_shareholdnum", required = false) String gd_shareholdnum,
            @RequestParam(value = "gd_currencynum", required = false) String gd_currencynum,
            @RequestParam(value = "gd_freezenum", required = false) String  gd_freezenum,
            @RequestParam(value = "gd_psotion", required = false) String  gd_psotion,
//            @RequestParam(value = "gd_doctype", required = false) String  gd_doctype,
//            @RequestParam(value = "gd_docnum", required = false) String gd_docnum,
            @RequestParam(value = "gd_phone", required = false) String  gd_phone,
            @RequestParam(value = "gd_fax", required = false) String gd_fax,
            @RequestParam(value = "gd_email", required = false) String  gd_email,
            @RequestParam(value = "gd_qq", required = false) String  gd_qq,
            @RequestParam(value = "gd_webchat", required = false) String  gd_webchat,
            @RequestParam(value = "gd_tel", required = false) String gd_tel,
            @RequestParam(value = "gd_remark", required = false) String gd_remark



            ) throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        PreparedStatement pst = null;
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "INSERT INTO work.tb_corp_shareholder(\n" +
                    "           gd_corp_id, gd_shtype, gd_shname, gd_shdoctype, gd_shdocnum, \n" +
                    "            gd_shareholdnum, gd_currencynum, gd_freezenum, gd_psotion, gd_doctype, \n" +
                    "            gd_docnum, gd_phone, gd_fax, gd_email, gd_qq, gd_webchat, gd_tel, \n" +
                    "            gd_remark)\n" +
                    "    VALUES (  ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, gd_corp_id);
            pst.setString(2, gd_shtype);
            pst.setString(3, gd_shname);
            pst.setString(4, gd_shdoctype);
            pst.setString(5, gd_shdocnum);
            pst.setString(6, gd_shareholdnum);
            pst.setString(7, gd_currencynum);
            pst.setString(8, gd_freezenum);
            pst.setString(9, gd_psotion);
            pst.setString(10, "");
            pst.setString(11, "");
            pst.setString(12, gd_phone);
            pst.setString(13, gd_fax);
            pst.setString(14, gd_email);
            pst.setString(15, gd_qq);
            pst.setString(16, gd_webchat);
            pst.setString(17, gd_tel);
            pst.setString(18, gd_remark);
            pst.executeUpdate();



            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return dataShop;
    }
}