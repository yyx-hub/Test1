 var dataXMLDOC ;
function backinput(form,infostr)
{
	var array = new Array();
	array = infostr.split("^");
	//�Ѿ��õ���Щ����
  	var personid=array[0];//��Աid
  	var strname=array[1]; //��Ա����
  	var sex=array[2]; //��Ա�Ա�
  	var idNum=array[3];//���֤��
  	var edu=array[4];//ѧ��
  	var birthday = array[5];//��������
  	var polface = array[6];//������ò
  	var level = array[7];//��ְ��
  	var holdpostDate = array[8];//��ְ����
  	var workDate = array[9];//�μӹ���ʱ��
  	var partyDate = array[10];//�뵳ʱ��
    var inRank = array[11];//�������
  	var outStation = array[12];//�������
  	var unit = array[13];//��λ
    var unitid = array[14];//��λ
    var makeclasstime = array[15];//����ʱ��
    var folk = array[16];//����
    var school = array[17];//��ҵԺУ
    var degree = array[18];//ѧλ
    var enterDeptTime = array[19];//�벿ʱ��
    var address = array[20];//��ͥסַ
    var foreignLanguage = array[21];//����
    if(personid != null && personid != "" && personid != "null")
    {
    	form.personID.value = personid;
    }
  	if(strname != null && strname != "" && strname != "null"){
  		form.name.value = strname;
  	}else{
  		form.name.value = "";
  	}
  	if(outStation != null && outStation != "" && outStation != "null"){
  		//var ss=getShowValue("107",outStation);
  		var ss=getShowValueByCode(outStation);
  		form.outStation.code = outStation;
  		form.outStation.value = ss;
  	}else
  	{
  		form.outStation.value = "";
  	}
  	if(inRank != null && inRank != "" && inRank != "null"){
  		var ss=getShowValueByCode(inRank);
  		form.inStation.value = ss;
  		form.inStation.code = inRank;
  	}
  	if(sex != null && sex != "" && sex != "null"){
  		var ss=getShowValueByCode(sex);
  		form.sex.value=ss;
  		form.sex.code=sex;
  	}
  	if(idNum != null && idNum != "" && idNum != "null"){
  		form.identityNumber.value=idNum;
  	}
  	if(birthday != null && birthday != "" && birthday != "null"){
  		form.birthDate.value=birthday;
  	}
  	if(polface != null && polface != "" && polface != "null"){
  		var ss=getShowValueByCode(polface);
  		form.polFace.value=ss;
  		form.polFace.code=polface;
  	}
  	if(edu != null && edu != "" && edu != "null"){
  		var ss=getShowValueByCode(edu);
  		form.eduBg.value=ss;
  		form.eduBg.code=edu;
  	}
  	if(level != null && level != "" && level != "null"){
  		var ss=getShowValueByCode(level);
  		form.officialDegree.value=ss;
  		form.officialDegree.code=level;
  	}
  	if(holdpostDate != null && holdpostDate != "" && holdpostDate != "null"){
  		form.holdpostDate.value=holdpostDate;
  	}
  	if(workDate != null && workDate != "" && workDate != "null"){
  		form.jobDate.value=workDate;
  	}
  	if(partyDate != null && partyDate != "" && partyDate != "null"){
  		form.joinPartyDate.value=partyDate;
  	}
  	if(unitid != null && unitid != "" && unitid != "null"){
  		var ss=getShowValueByCode(unitid,true);
  		form.originalDep.value=ss;
  		form.originalDep.code=unitid;
  	}
  	if(makeclasstime != null && makeclasstime != "" && makeclasstime !="null"){
  		form.makeClassTime.value=makeclasstime;
  	}
    if(folk != null && folk != "" && folk !="null"){
  		form.folk.value=folk;
  	}
  	if(school != null && school != "" && school !="null"){
  		form.school.value=school;
  	}
  	if(degree != null && degree != "" && degree !="null"){
  		form.degree.value=degree;
  	}
  	if(enterDeptTime != null && enterDeptTime != "" && enterDeptTime !="null"){
  		form.joinDeptTime.value=enterDeptTime;
  	}
  	if(address != null && address != "" && address !="null"){

  		form.homeAddress.value=address;
  	}
  	 if(foreignLanguage != null && foreignLanguage != "" && foreignLanguage != "null")
    {
    	var ss=getShowValueByCode(foreignLanguage);
  		form.foreignLanguage.code = foreignLanguage;
  		form.foreignLanguage.value = ss;
    }

}
function backinputmate(form,infostr)
{
	var array = new Array();
	array = infostr.split("^");
	//�Ѿ��õ���Щ����
  	var personid=array[0];//��Աid
  	var strname=array[1]; //��Ա����
  	var sex=array[2]; //��Ա�Ա�
  	var idNum=array[3];//���֤��
  	var edu=array[4];//ѧ��
  	var birthday = array[5];//��������
  	var polface = array[6];//������ò
  	var level = array[7];//��ְ��
  	var holdpostDate = array[8];//��ְ����
  	var workDate = array[9];//�μӹ���ʱ��
  	var partyDate = array[10];//�뵳ʱ��
    var inRank = array[11];//�������
  	var outStation = array[12];//�������
  	var unit = array[13];//��λ
    var unitid = array[14];//��λ
    var makeclasstime = array[15];//����ʱ��
    var folk = array[16];//����
    var school = array[17];//��ҵԺУ
    var degree = array[18];//ѧλ
    var enterDeptTime = array[19];//�벿ʱ��
    var address = array[20];//��ͥסַ
    var foreignLanguage = array[21];//����
    var borrowUnit = array[22];//�����λ
    if(personid != null && personid != "" && personid != "null")
    {
    	form.personID.value = personid;
    }
  	if(strname != null && strname != "" && strname != "null"){
  		form.name.value = strname;
  	}else{
  		form.name.value = "";
  	}
  	if(outStation != null && outStation != "" && outStation != "null"){
  		//var ss=getShowValue("107",outStation);
  		var ss=getShowValueByCode(outStation);
  		form.outStation.code = outStation;
  		form.outStation.value = ss;
  	}else
  	{
  		form.outStation.value = "";
  	}
  	if(inRank != null && inRank != "" && inRank != "null"){
  		var ss=getShowValueByCode(inRank);
  		form.inStation.value = ss;
  		form.inStation.code = inRank;
  	}
  	if(sex != null && sex != "" && sex != "null"){
  		var ss=getShowValueByCode(sex);
  		form.sex.value=ss;
  		form.sex.code=sex;
  	}
  	if(idNum != null && idNum != "" && idNum != "null"){
  		form.identityNumber.value=idNum;
  	}
  	if(birthday != null && birthday != "" && birthday != "null"){
  		form.birthDate.value=birthday;
  	}
  	if(polface != null && polface != "" && polface != "null"){
  		var ss=getShowValueByCode(polface);
  		form.polFace.value=ss;
  		form.polFace.code=polface;
  	}
  	if(edu != null && edu != "" && edu != "null"){
  		var ss=getShowValueByCode(edu);
  		form.eduBg.value=ss;
  		form.eduBg.code=edu;
  	}
  	if(level != null && level != "" && level != "null"){
  		var ss=getShowValueByCode(level);
  		form.officialDegree.value=ss;
  		form.officialDegree.code=level;
  	}
  	if(holdpostDate != null && holdpostDate != "" && holdpostDate != "null"){
  		form.holdpostDate.value=holdpostDate;
  	}
  	if(workDate != null && workDate != "" && workDate != "null"){
  		form.jobDate.value=workDate;
  	}
  	if(partyDate != null && partyDate != "" && partyDate != "null"){
  		form.joinPartyDate.value=partyDate;
  	}
  	if(borrowUnit != null && borrowUnit != "" && borrowUnit != "null"){
  		form.originalDep.value=borrowUnit;  		
  	}
  	if(makeclasstime != null && makeclasstime != "" && makeclasstime !="null"){
  		form.makeClassTime.value=makeclasstime;
  	}
    if(folk != null && folk != "" && folk !="null"){
  		form.folk.value=folk;
  	}
  	if(school != null && school != "" && school !="null"){
  		form.school.value=school;
  	}
  	if(degree != null && degree != "" && degree !="null"){
  		form.degree.value=degree;
  	}
  	if(enterDeptTime != null && enterDeptTime != "" && enterDeptTime !="null"){
  		form.joinDeptTime.value=enterDeptTime;
  	}
  	if(address != null && address != "" && address !="null"){

  		form.homeAddress.value=address;
  	}
  	 if(foreignLanguage != null && foreignLanguage != "" && foreignLanguage != "null")
    {
    	var ss=getShowValueByCode(foreignLanguage);
  		form.foreignLanguage.code = foreignLanguage;
  		form.foreignLanguage.value = ss;
    }

}
function fPopUpCalendarDlgOWC(){
	showx = event.screenX - event.offsetX -160//+ 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	retval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
	var activecell = sheet.ActiveCell;
	if( retval != null ){
		activecell.value = "'"+retval;
	}else{
		//alert("canceled");
	}
}
function fPopUpCalendarDlgOWC(row,col){
	showx = 200//window.event.screenX - window.event.offsetX -160//+ 25; // + deltaX;
	showy = 300//window.event.screenY - window.event.offsetY + 18; // + deltaY;
	owcretval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
 	if( owcretval != null ){
		sheet.Activesheet.Cells(row,col).value = "'"+owcretval;		
	}else{
		//alert("canceled");
	}
}
function fPopUpCalendarDlgOWCChn(row,col){
	showx = 200//window.event.screenX - window.event.offsetX -160//+ 25; // + deltaX;
	showy = 300//window.event.screenY - window.event.offsetY + 18; // + deltaY;
	owcretval = window.showModalDialog("/js/CalendarDlgChn.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
 	if( owcretval != null ){
		sheet.Activesheet.Cells(row,col).value = "'"+owcretval;
	}else{
		//alert("canceled");
	} 	
}
function checkDateEarlier(strStart,strEnd)
{
    //�����һ������Ϊ�գ���ͨ������
    if (( strStart == "" ) || ( strEnd == "" ))
        return true;
    var arr1 = strStart.split("-");
    var arr2 = strEnd.split("-");
    var date1 = new Date(arr1[0],parseInt(arr1[1].replace(/^0/,""),10) - 1,arr1[2]);
    var date2 = new Date(arr2[0],parseInt(arr2[1].replace(/^0/,""),10) - 1,arr2[2]);
    if(arr1[1].length == 1)
        arr1[1] = "0" + arr1[1];
    if(arr1[2].length == 1)
        arr1[2] = "0" + arr1[2];
    if(arr2[1].length == 1)
        arr2[1] = "0" + arr2[1];
    if(arr2[2].length == 1)
        arr2[2]="0" + arr2[2];
    var d1 = arr1[0] + arr1[1] + arr1[2];
    var d2 = arr2[0] + arr2[1] + arr2[2];
    if(parseInt(d1,10) > parseInt(d2,10))
       return false;
    else
       return true;
}//~~~
function checkIsValidDate(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str == "")
        return true;
    var pattern = /^((\d{4})|(\d{2}))-(\d{1,2})-(\d{1,2})$/g;
    if(!pattern.test(str))
        return false;
    var arrDate = str.split("-");
    if(parseInt(arrDate[0],10) < 100)
        arrDate[0] = 2000 + parseInt(arrDate[0],10) + "";
    var date =  new Date(arrDate[0],(parseInt(arrDate[1],10) -1)+"",arrDate[2]);
    if(date.getYear() == arrDate[0]
       && date.getMonth() == (parseInt(arrDate[1],10) -1)+""
       && date.getDate() == arrDate[2])
        return true;
    else
        return false;
}//~~~
/**
*У���ַ����Ƿ�Ϊ����
*����ֵ��
*���Ϊ�գ�����У��ͨ����      ����true
*����ִ�ȫ��Ϊ���֣�У��ͨ��������true
*���У�鲻ͨ����              ����false     �ο���ʾ��Ϣ�����������Ϊ���֣�
*/
function checkIsInteger(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str == "")
        return true;
    if(/^(\-?)(\d+)$/.test(str))
        return true;
    else
        return false;
}//~~~