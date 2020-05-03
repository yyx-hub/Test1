package com.oa.user.handler;

import com.oa.commons.beans.User;
import com.oa.user.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * company: www.abc.com
 * Author: Administrator
 * Create Data: 2019/12/9 0009
 */
@Controller
@RequestMapping("/user")
public class UserHandler {

    @Autowired
    private IUserService userService;

    @RequestMapping("/login.do")
    public String login(User user, HttpSession session, Model model){
        //System.out.println(user);
        User login_user = userService.findUser(user);
        System.out.println("登录用户："+login_user);
        if (login_user != null){
            session.setAttribute("login_user",login_user);
            return "/html/index.jsp";
        }else {
            model.addAttribute("error","用户名或密码错误！");
            return "/html/login.jsp";
        }
    }
}
