package com.oa.desktop.news.service;

import com.oa.commons.beans.NewsLabel;
import com.oa.commons.vo.Page;

import java.util.List;

public interface INewsLabelService {

    Page<NewsLabel> findCurrentPage(int pagenum, Integer id);

    List<NewsLabel> findAllNewsLbel();

    int addNewsLabel(NewsLabel newsLabel);

    int removeNewsLabel(int id);

    NewsLabel findNewsLabelById(Integer id);

    int modifyNewsLabel(NewsLabel newsLabel);
}
