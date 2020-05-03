<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/12/3 0003
  Time: 上午 11:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>OA</title>
</head>

<frameset rows="89,*" cols="*" frameborder="no" border="0" framespacing="0">
    <frame src="${pageContext.request.contextPath}/html/top.jsp" name="topFrame" scrolling="No" noresize="noresize" id="topFrame" title="topFrame" />
    <frameset cols="200,10,*" frameborder="no" border="0" framespacing="0" id="oa_frame">
        <frame src="${pageContext.request.contextPath}/html/left.jsp" name="leftFrame" scrolling="yes" noresize="noresize" id="leftFrame" title="leftFrame" />
        <frame src="${pageContext.request.contextPath}/html/middle.jsp" name="middleFrame" scrolling="No" noresize="noresize" id="middleFrame" title="middleFrame" />
        <frame src="${pageContext.request.contextPath}/html/main.jsp" name="mainFrame" scrolling="yes" id="mainFrame" title="mainFrame" />
    </frameset>
</frameset>
<noframes><body>
</body>
</noframes></html>
