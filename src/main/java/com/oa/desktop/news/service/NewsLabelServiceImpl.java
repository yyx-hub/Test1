package com.oa.desktop.news.service;

import com.oa.commons.beans.NewsLabel;
import com.oa.commons.vo.Page;
import com.oa.desktop.news.dao.INewsLabelDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NewsLabelServiceImpl implements INewsLabelService {

    @Autowired
    private INewsLabelDao newsLabelDao;

    @Override
    public Page<NewsLabel> findCurrentPage(int pagenum, Integer id) {
        Page<NewsLabel> page = new Page<>();

        page.setPagenum(pagenum);

        int count = newsLabelDao.selectAllCount(id);
        page.setTotalRows(count);

        Map map = new HashMap<>();
        map.put("pageStartIndex", page.getPageStartIndex());
        map.put("pageSize", page.getPageSize());
        map.put("id", id);

        System.out.println("service:"+map.get("id"));
        List<NewsLabel> datas = newsLabelDao.selectNewsLabel(map);
        page.setDatas(datas);

        return page;
    }

    @Override
    public List<NewsLabel> findAllNewsLbel() {
        return newsLabelDao.selectAllNewsLabel();
    }

    @Override
    public int addNewsLabel(NewsLabel newsLabel) {
        return newsLabelDao.insertNewsLabel(newsLabel);
    }

    @Override
    public int removeNewsLabel(int id) {
        return newsLabelDao.deleteNewsLabelById(id);
    }

    @Override
    public NewsLabel findNewsLabelById(Integer id) {
        return newsLabelDao.selectNewsLabelById(id);
    }

    @Override
    public int modifyNewsLabel(NewsLabel newsLabel) {
        return newsLabelDao.updateNewsLabel(newsLabel);
    }
}
