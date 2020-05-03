
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/12/3 0003
  Time: 上午 11:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>栏目管理</title>
    <link href="../../css/style.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="../../js/util.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.js"></script>
    <script type="text/javascript">
        $(function(){
            if("${message}".length != 0){
                alert("${message}");
            }
        });
        function submitForm(){
            //alert("123456");
            var form = document.getElementById("myform")
            form.submit();
        }
        function shanchu()
        {
            var  str = confirm("是否确定删除上级栏目？");
            if(str == true)
            {
                alert("确定删除！");
            }
            else
            {
                alert("取消删除！");
            }
        }
    </script>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<center>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td height="25" align="center" valign="bottom" class="td06"><table width="100%"  border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="2%" valign="middle" background="../../images/bg_03.gif">&nbsp;</td>
                    <td width="2%" valign="middle" background="../../images/bg_03.gif"><img src="../../images/main_28.gif" width="9" height="9" align="absmiddle"></td>
                    <td height="30" valign="middle" background="../../images/bg_03.gif"><div align="left"><font color="#FFFFFF">栏目管理</font></div></td>
                </tr>
            </table></td>
        </tr>
    </table>
    <form id="myform" method="post" action="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do">
        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="table01">
            <tr>
                <td colspan="2" class="td_02"><SPAN class=td_title>根据栏目名称查询</SPAN></td>
            </tr>
            <tr>
                <td width="14%" class="td_02">栏目名称</td>
                <td width="86%" class="td_02">
                    <select name="select" class="input" style="width:99% " onchange="submitForm()">
                        <option value="0" selected>--请选择--</option>
                        <c:forEach items="${total}" var="data">
                            <option value="${data.id}" <c:if test="${data.id == id}">selected</c:if>>${data.name}</option>
                        </c:forEach>
                    </select>
                </td>
            </tr>
            <!--  <tr>
               <td class="td_02">二级栏目名称</td>
               <td class="td_02">
                 <select name="select" class="input" style="width:99% ">
                   <option value="1" selected>--请选择--</option>
                   <option value="2">天下足球</option>
                   <option value="3">我猜</option>
                 </select>
               </td>
             </tr> -->
        </table>
        <br>
        <table width="95%"  border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td class="td_page" align="left">
                    <div align="right">
                        <input name="Submit" type="submit" class="buttonface02" value="添加栏目" onClick="javascript:windowOpen('${pageContext.request.contextPath}/html/news/addNewsLabel.jsp','','',700,300,'','','')">
                    </div></td>
            </tr>
        </table>
        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" class="table01">
            <c:choose>
                <%--只有一页或者没有数据时，全部超链接不能使用--%>
                <c:when test="${page.totalPages == 1 || page.totalPages == 0 }">
                    <tr>
                        <td colspan="5" align="right" class="td07"><img src="../../images/1.gif" width="4" height="5" align="absmiddle"> 首页　 <img src="../../images/2.gif" width="3" height="5" align="absmiddle"> 上一页　 <img src="../../images/2-2.gif" width="3" height="5" align="absmiddle"> 下一页 　 <img src="../../images/3.gif" width="4" height="5" align="absmiddle"> 末页　　共 ${page.totalPages} 页 ${page.totalRows} 条记录</td>
                    </tr>
                </c:when>
                <%--当前为第一页，下一页和末页超链接可用--%>
                <c:when test="${page.pagenum == 1}">
                    <tr>
                        <td colspan="5" align="right" class="td07"><img src="../../images/1.gif" width="4" height="5" align="absmiddle"> 首页　 <img src="../../images/2.gif" width="3" height="5" align="absmiddle"> 上一页　 <img src="../../images/2-2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum+1}&select=${id}">下一页</a> 　 <img src="../../images/3.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.totalPages}&select=${id}">末页</a>　　共 ${page.totalPages} 页 ${page.totalRows} 条记录</td>
                    </tr>
                </c:when>
                <%--当前为末页，上一页和首页超链接可用--%>
                <c:when test="${page.pagenum == page.totalPages}">
                    <tr>
                        <td colspan="5" align="right" class="td07"><img src="../../images/1.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=1&select=${id}">首页</a>　 <img src="../../images/2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum-1}&select=${id}">上一页</a>　 <img src="../../images/2-2.gif" width="3" height="5" align="absmiddle"> 下一页 　 <img src="../../images/3.gif" width="4" height="5" align="absmiddle"> 末页　　共 ${page.totalPages} 页 ${page.totalRows} 条记录</td>
                    </tr>
                </c:when>
                <%--其他中间也，全部超链接都可用--%>
                <c:otherwise>
                    <tr>
                        <td colspan="5" align="right" class="td07"><img src="../../images/1.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=1&select=${id}">首页</a>　 <img src="../../images/2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum-1}&select=${id}">上一页</a>　 <img src="../../images/2-2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum+1}&select=${id}">下一页</a> 　 <img src="../../images/3.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.totalPages}&select=${id}">末页</a>　　共 ${page.totalPages} 页 ${page.totalRows} 条记录</td>
                    </tr>
                </c:otherwise>
            </c:choose>
            <%--<tr>
                <td colspan="5" align="right" class="td07"><img src="../../images/1.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=1">首页</a>　 <img src="../../images/2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum-1}">上一页</a>　 <img src="../../images/2-2.gif" width="3" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.pagenum+1}">下一页</a> 　 <img src="../../images/3.gif" width="4" height="5" align="absmiddle"> <a href="${pageContext.request.contextPath}/desktop/news/queryNewsLabel.do?pagenum=${page.totalPages}">末页</a>　　共 ${page.totalPages} 页 ${page.totalRows} 条记录</td>
            </tr>--%>
            <tr>
                <td width="17%" class="td_top">栏目名称</td>
                <td width="15%" class="td_top">上级栏目名称</td>
                <td width="44%" class="td_top">栏目描述</td>
                <td width="12%" class="td_top">删除</td>
                <td width="12%" class="td_top">修改</td>
            </tr>

            <c:forEach items="${page.datas}" var="data">
                <tr>
                    <td class="td07">${data.name}</td>
                    <td class="td07">${data.parent.name == null?"无":data.parent.name }</td>
                    <td class="td07">${data.content}</td>
                    <td class="td07"><a href="${pageContext.request.contextPath}/desktop/news/removeNewsLabel.do?id=${data.id}" onClick="shanchu()">删除</a></td>
                    <td class="td07"><a href="#" onClick="javascript:windowOpen('${pageContext.request.contextPath}/desktop/news/modifyNewsLabel.do?id=${data.id}&flag=1','','',670,260,'no','yes','100','100')">修改</a>
                    </td>
                </tr>
            </c:forEach>

           <%-- <tr>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
            </tr>
            <tr>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
                <td class="td07">&nbsp;</td>
            </tr>--%>
        </table>
        <p>&nbsp;</p>
    </form>
</center>
</body>
</html>
