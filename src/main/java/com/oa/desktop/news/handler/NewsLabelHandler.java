package com.oa.desktop.news.handler;

import com.oa.commons.beans.NewsLabel;
import com.oa.commons.vo.Page;
import com.oa.desktop.news.service.INewsLabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/desktop/news")
public class NewsLabelHandler {

    @Autowired
    private INewsLabelService newsLabelService;

    //查询栏目信息（查询全部分页，或按条件查询分页）
    @RequestMapping("queryNewsLabel.do")
    public String queryNewsLabel(@RequestParam(defaultValue = "1") int pagenum,@RequestParam(value = "select",defaultValue = "0") Integer id, HttpSession session){
        session.setAttribute("id",id);
        Page<NewsLabel> page = newsLabelService.findCurrentPage(pagenum,id);
        session.setAttribute("page",page);
        List<NewsLabel> totalNewsLabel = newsLabelService.findAllNewsLbel();
        session.setAttribute("total",totalNewsLabel);
        /*for (NewsLabel ns:page.getDatas()){
            System.out.println(ns);
        }*/
        //System.out.println(id);
        return "/html/news/newslabelManager.jsp";
    }
    //添加栏目信息
    @RequestMapping("/addNewsLabel.do")
    public String addNewsLabel(NewsLabel newsLabel, Model model){
        //System.out.println(newsLabel);
        int rows = newsLabelService.addNewsLabel(newsLabel);
        if (rows > 0){
            model.addAttribute("message","添加成功！");
        }else {
            model.addAttribute("message","添加失败！");
        }
        return "/html/news/addNewsLabel.jsp";
    }

    //删除栏目信息
    @RequestMapping("/removeNewsLabel.do")
    public String removeNewsLabel(int id, Model model){
        //System.out.println(id);
        int rows = newsLabelService.removeNewsLabel(id);
        if (rows > 0){
            model.addAttribute("message","删除成功！");
        }else {
            model.addAttribute("message","删除失败！");
        }
        return "/desktop/news/queryNewsLabel.do";
    }

    //修改栏目信息
    @RequestMapping("/modifyNewsLabel.do")
    public String modifyNewsLabel(NewsLabel newsLabel,String flag, Model model){
        //System.out.println(newsLabel);
        //System.out.println("flag="+flag);
        //flag==1时查询栏目信息
        if ("1".equals(flag)){
            NewsLabel target = newsLabelService.findNewsLabelById(newsLabel.getId());
            model.addAttribute("target",target);
            System.out.println(target);
            return "/html/news/modifyNewsLabel.jsp";
        }else {//修改栏目信息
            int rows = newsLabelService.modifyNewsLabel(newsLabel);
            if (rows > 0){
                model.addAttribute("message","修改成功！");
            }else {
                model.addAttribute("message","修改失败！");
            }
            NewsLabel target = newsLabelService.findNewsLabelById(newsLabel.getId());
            model.addAttribute("target", target);
            return "/html/news/modifyNewsLabel.jsp";
        }
    }


}
