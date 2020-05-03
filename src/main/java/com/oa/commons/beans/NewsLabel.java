package com.oa.commons.beans;

import java.util.List;

public class NewsLabel {

    private Integer id;
    private String name;
    private String content;

    //关联属性：以多方为主，查询父栏目（一方）
    private NewsLabel parent;

    //关联属性：以一方为主，查询子栏目（多方）
    private List<NewsLabel> children;

    public NewsLabel() {
    }

    public NewsLabel(String name, String content, NewsLabel parent, List<NewsLabel> children) {
        this.name = name;
        this.content = content;
        this.parent = parent;
        this.children = children;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public NewsLabel getParent() {
        return parent;
    }

    public void setParent(NewsLabel parent) {
        this.parent = parent;
    }

    public List<NewsLabel> getChildren() {
        return children;
    }

    public void setChildren(List<NewsLabel> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "NewsLabel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", content='" + content + '\'' +
                ", parent=" + parent +
                ", children=" + children +
                '}';
    }
}
