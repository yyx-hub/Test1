//:)~  ���Ҽ�������



//�����Ƿ�Ϊ��

function isEmpty(str) {

    var flag = true;

    if ((str == null) || (str.length == 0 )) {

        return true;

    } else {

        return false;

    }

}



//����Email��ַ�Ƿ���ȷ

function checkEmail(str) {

  if (!(str == "")) {

    var atIndex = str.indexOf('@');

    var dotIndex = str.indexOf('.', atIndex);

    var flag = false;

    theSub = str.substring(0, dotIndex + 1);

    if ((atIndex < 1) || (atIndex != str.lastIndexOf('@')) ||

        (dotIndex < atIndex + 2) || (str.length <= theSub.length)) {

        flag = true;

    } else {

        flag = false;

    }

    return flag;

  }

}



//�����ַ����Ƿ��пո�,ð�ż���/˫����( ,:,',");

function checkSign(str) {
 var account=0;;

  if (!(str == "")) {

    var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         //if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
		if ( cCheck==' ' ) {
			   account++;               
              //return false;

        }

    }
    if(account==str.length||isNaN(str))
	  {
       return true;
	  }
	else
	  {
	    return false;
	  }

  }
  else{return true;}

}
function checkSign_non(str) {
 var account=0;;

  if (!(str == "")) {

    var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         //if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
		if ( cCheck==' ' ) {
			   account++;               
              //return false;

        }

    }
    if(account==str.length)
	  {
       return true;
	  }
	else
	  {
	    return false;
	  }

  }
  else{return true;}

}
//�����ַ����Ƿ��пո�,ð�ż���/˫����( ,:,',");
function checkSignb(str) {
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if ( cCheck==' ' || cCheck==':' || cCheck=='\'' || cCheck=='\"' ) {
              return true;
        }
    }
    return false;
  }
}
//����ַ���;
function split(str,code) {
  var bstr="";
  var estr="";
  var note="0";
  var array=new Array;
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if (cCheck!=code && note=="0" ) {
             bstr=bstr+cCheck;
        }
		else
		{
		  if(note!="1")
		  {
			  note="1";
		   }
		   else
		  {
		   estr=estr+cCheck;
		  }
		}
    }
	array[0]=bstr;
    array[1]=estr;
    return array;
  }
}
//�����ַ����Ƿ��е�/˫����( ');
function checkSignA(str) {
  if (!(str == "")) {
    var cCheck;
    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {
        cCheck = str.charAt(nameIndex);
         if ( cCheck=='\'' ) {
              return true;
        }
    }
    return false;
  }
}

//����Email��ַ�Ƿ���ȷ

function isWebAddress(str) {

  if (!(str == "")) {

        var cCheck;

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

         if ( cCheck=='.' ) {

              return false;

        }

    }

    return true;

  }

}


//�ж��Ƿ�������

function isNum(str) {

    var flag = true;

    var cCheck;

    var src = "0123456789";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//�ж��Ƿ�����ĸ

function isChar(str) {

    var flag = true;

    var cCheck;

    var src = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//�ж��Ƿ���Сд��ĸ

function isLowerChar(str) {

    var flag = true;

    var cCheck;

    var src = "abcdefghijklmnopqrstuvwxyz";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//�ж��Ƿ��Ǵ�дд��ĸ

function isUpperChar(str) {

    var flag = true;

    var cCheck;

    var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}



//�ж��Ƿ���Ŀ¼����

function isDir(str) {

    var flag = true;

    var cCheck;

    var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

    for (var nameIndex=0; nameIndex<str.length; nameIndex++) {

        cCheck = str.charAt(nameIndex);

        if (src.indexOf(cCheck) == -1) {

            flag = false;

        }

    }

    return flag;

}