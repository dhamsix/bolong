package com.springapp.mvc.system.service;

import com.springapp.mvc.system.pojo.Role;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface RoleService {
    List<Role> list(String rolename);

    public void delete(Integer id);
}
