package com.oa.commons.filters;

import com.oa.commons.beans.User;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * company: www.abc.com
 * Author: Administrator
 * Create Data: 2019/12/9 0009
 */
public class LoginFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String url = request.getRequestURI();
        if (url.endsWith("login.jsp")||url.endsWith("login.do")){
            filterChain.doFilter(request,response);
        }else {
            User login_user = (User) request.getSession().getAttribute("login_user");
            if (login_user != null){
                filterChain.doFilter(request,response);
            }else {
                request.getRequestDispatcher("/html/login.jsp").forward(request,response);
            }
        }
    }
}
