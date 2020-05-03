package com.oa.commons.vo;

import java.util.List;

public class Page<T> {
    private int pagenum;    //当前页码
    private int pageSize;   //页面大小
    private int pageStartIndex;//当前页起始索引
    private int totalRows;  //总记录数
    private int totalPages; //总页面
    private List<T> datas;  //页面需要数据

    public Page() {
        pagenum = 1;
        pageSize = 3;
    }

    public Page(int pagenum, int pageSize) {
        if (pagenum <= 0){
            pagenum = 1;
        }else {
            this.pagenum = pagenum;
        }
        if (pageSize <= 0){
            pageSize = 3;
        }else {
            this.pageSize = pageSize;
        }
    }

    public int getPagenum() {
        return pagenum;
    }

    public void setPagenum(int pagenum) {
        this.pagenum = pagenum;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageStartIndex() {
        return (pagenum - 1) * pageSize;
    }

    public int getTotalRows() {
        return totalRows;
    }

    public void setTotalRows(int totalRows) {
        this.totalRows = totalRows;
    }

    public int getTotalPages() {
        if (totalRows%pageSize == 0){
            totalPages = totalRows/pageSize;
        }else {
            totalPages = totalRows/pageSize + 1;
        }
        return totalPages;
    }

    public List<T> getDatas() {
        return datas;
    }

    public void setDatas(List<T> datas) {
        this.datas = datas;
    }
}
