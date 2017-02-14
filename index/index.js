//轮播图
var banner1=document.getElementById('banner1');
$.ajax({
    url:'http://www.iwen.wiki/zhichenshop/shopping/index/banner.php',
    type:'get',
    dataType:'json',
    success:function(result) {
        for (var i = 0; i < result.banner1img.length; i++){
            banner1.innerHTML+='<div class="swiper-slide'+'">'
                +'<a href=\"../second/second.html\">'
                +'<img src="'+result.banner1img[i]+'" alt='+'"'+'">'
                +'</a>'
                +'</div>';
        }
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:2000,
            pagination:'.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (index, cname) {
                return '<span class="' + cname + '">' + '</span>'
            }
        });
    }
});
var banner2=document.getElementById('banner2');
$.ajax({
    url:'http://www.iwen.wiki/zhichenshop/shopping/index/banner.php',
    type:'get',
    dataType:'json',
    success:function(result) {
        for (var j = 0; j < result.banner2img.length; j++){
            banner2.innerHTML+='<div class="swiper-slide'+'">'
                +'<a href=\"../second/second.html\">'
                +'<img src="'+result.banner2img[j]+'" alt='+'"'+'">'
                +'</a>'
                +'</div>';
        }
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:2000,
            pagination:'.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (index, cname) {
                return '<span class="' + cname + '">' + '</span>'
            }
        });
    }
});

//倒计时time
var timer=setInterval(function(){
    var myDate=new Date();
    var h=myDate.getHours();
    var y=myDate.getFullYear();
    var m=myDate.getMonth();
    var d=myDate.getDate();
    var arr=[8,12,16,20];
    var time,date,myDate1;
    var oTime=document.getElementById('time');
    for(var i=0;i<arr.length;i++){
        if(h<arr[i]&&h+4>arr[i]){
            date= y+'/'+(m+1)+'/'+d+','+arr[i]+':00:00';
            myDate1=new Date(date);
            time=myDate1-myDate;
            var hh=Math.floor(time/1000/60/60);
            var mm=Math.floor((time-hh*1000*60*60)/1000/60);
            var ss=Math.floor((time-mm*1000*60-hh*1000*60*60)/1000);
            oTime.innerHTML='';
            if(hh<10){
                oTime.innerHTML+='<i>0'+hh+'</i>:';
            }else{
                oTime.innerHTML+='<i>'+hh+'</i>:';
            }
            if(mm<10){
                oTime.innerHTML+='<i>0'+mm+'</i>:';
            }else{
                oTime.innerHTML+='<i>'+mm+'</i>:';
            }
            if(ss<10){
                oTime.innerHTML+='<i>0'+ss+'</i>';
            }else{
                oTime.innerHTML+='<i>'+ss+'</i>';
            }
            console.log(oTime.innerHTML);
        }else{
            oTime.innerHTML='全程好货不等人';
        }
    }
},1000);

//动图
var dongTu=document.getElementById('dongTu');
var arrTu=['url(../images/page1/sk1.jpg)','url(../images/page1/sk2.jpg)','url(../images/page1/sk3.jpg)'];
var i=0;
setInterval(function(){
    dongTu.style.backgroundImage=arrTu[i];
    i++;
    if(i==3){
        i=0;
    }
},2000);

var list=document.getElementById('shopList');
$.ajax({
    url:'http://www.iwen.wiki/zhichenshop/shopping/index/shop.php',
    type:'get',
    dataType:'json',
    success:function(result) {
        for (var i = 0; i < result.length; i++) {
            list.innerHTML+='<li class="' + 'shopLi">'
                + '<div class="shopLiDiv' + '">'
                + '<img class="shopLi_left' + '" src=' + '"'+result[i].shopicon+'">'
                + '<div class="shopLi_middle' + '">'
                + '<h2>'+result[i].shopname+'</h2><div>'
                + '<p class="shopLi_middleX' + '">'
                + '<i></i><i></i><i></i><i></i><i></i>'
                + '</p></div>'
                + ' <p class="shopLi_middleXl' + '">'+result[i].shopnum+'件商品 | 月售'+result[i].sell+'单</p>'
                + '</div>'
                + '<div class="shopLi_right'
                + '">'
                + '<span class="tp'
                + '"></span>'
                + '</div></div></li>';
        }
    }
});

var zy=document.getElementsByClassName('zy')[0];
var nav_1=document.getElementsByClassName('nav_1')[0];
var search_right=document.getElementById('search_right');
var swiper=document.getElementById('swiper');
var search=document.getElementsByClassName('search')[0];
var oI=search.getElementsByTagName('i')[1];
var oDiv=search.getElementsByTagName('div')[0];
var aI=search.getElementsByTagName('i');
var lI=aI[aI.length-1];

//返回
function pageScroll(){
    window.scrollBy(0,-80);
    scrolldelay=setTimeout('pageScroll()',100);
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop === 0) {
        clearTimeout(scrolldelay);
    }
}
zy.onclick=function(){
    pageScroll();
};
window.onscroll=function(){
    search_right.style.width=(1-document.body.scrollTop/swiper.offsetHeight)*100+'%';
    if(swiper.offsetHeight+search.offsetHeight-document.body.scrollTop<search.offsetHeight){
        search_right.style.width="0%";
        search_right.style.display='none';
        oDiv.style.display='inline-block';
        search.style.backgroundColor='#fff';
        oI.style.backgroundPosition='-17px -33px';
        lI.style.display='inline-block';
        search.style.borderBottom='1px solid #e8e8e8';
        search.style.height='45px';
        search.style.opacity=1-(swiper.offsetHeight-document.body.scrollTop)/search_right.offsetHeight;
    }else{
        search_right.style.display='inline-block';
        oDiv.style.display='none';
        search.style.backgroundColor='transparent';
        oI.style.backgroundPosition='-17px -1px';
        lI.style.display='none';
        search.style.opacity=1;
        search.style.borderBottom='none';

    }

    if(document.documentElement.scrollTop||document.body.scrollTop<nav_1.offsetTop){
        zy.style.display='none';
    }else{
        zy.style.display='block';
    }
};
window.onload=function(){

};
