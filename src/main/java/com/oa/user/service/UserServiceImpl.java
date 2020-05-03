package com.oa.user.service;

import com.oa.commons.beans.User;
import com.oa.user.dao.IUserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * company: www.abc.com
 * Author: Administrator
 * Create Data: 2019/12/9 0009
 */
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserDao userDao;
    @Override
    public User findUser(User user) {
        return userDao.selectUser(user);
    }
}
