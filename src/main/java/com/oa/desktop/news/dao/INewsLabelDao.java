package com.oa.desktop.news.dao;

import com.oa.commons.beans.NewsLabel;
import com.oa.commons.vo.Page;

import java.util.List;
import java.util.Map;

public interface INewsLabelDao {
    int selectAllCount(Integer id);

    List<NewsLabel> selectNewsLabel(Map map);

    List<NewsLabel> selectAllNewsLabel();

    int insertNewsLabel(NewsLabel newsLabel);

    int deleteNewsLabelById(int id);

    NewsLabel selectNewsLabelById(Integer id);

    int updateNewsLabel(NewsLabel newsLabel);
}
