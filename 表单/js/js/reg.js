// JavaScript Document
function chkform()
{
	var pass1=document.aaa.mh.value;
	var pass2=document.aaa.mn.value;
	if(pass1!=pass2)
	{
		alert("两次密码不一致！");
		return false;
	}
	
	return true;
}
