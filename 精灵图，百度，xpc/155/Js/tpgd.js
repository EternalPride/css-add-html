// JavaScript Document
 var bannerAD=new Array();
   var bannerADlink=new Array();
   var adNum=0;

   bannerAD[0]="images/4251.jpg";
   bannerADlink[0]="http://www.dw.com/";
   bannerAD[1]="images/2-555.jpg";
   bannerADlink[1]="";
   bannerAD[2]="images/4252.jpg";
   bannerADlink[2]="";
   bannerAD[3]="images/4253.jpg";
   bannerADlink[3]=""; 

   var preloadedimages=new Array();
   for (i=1;i<bannerAD.length;i++){
      preloadedimages[i]=new Image();
      preloadedimages[i].src=bannerAD[i];
   }

function setTransition(){
   if (document.all){
      bannerADrotator.filters.revealTrans.Transition=Math.floor(Math.random()*23);
      bannerADrotator.filters.revealTrans.apply();
   }
}

function playTransition(){
   if (document.all)
      bannerADrotator.filters.revealTrans.play()
}

function nextAd(){
   if(adNum<bannerAD.length-1)adNum++ ;
      else adNum=0;
   setTransition();
   document.images.bannerADrotator.src=bannerAD[adNum];
   playTransition();
   theTimer=setTimeout("nextAd()", 1500);
}

function jump2url(){
   jumpUrl=bannerADlink[adNum];
   jumpTarget='';
   if (jumpUrl != ''){
      if (jumpTarget != '')window.open(jumpUrl,jumpTarget);
      else location.href=jumpUrl;
   }
}
function displayStatusMsg() { 
   status=bannerADlink[adNum];
   document.returnValue = true;
}
