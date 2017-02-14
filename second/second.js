var list=document.getElementById('list');
$.ajax({
    url:'http://www.iwen.wiki/zhichenshop/shopping/bannerView/bannerview.php',
    type:'get',
    dataType:'json',
    success:function(result) {
        for(var i=0;i<result.shoplistimg.length;i++){
            list.innerHTML+='<li>'
                                +'<img src=\"'+result.shoplistimg[i]+'\" alt=\"\"/>'
                                +'<span>'+result.shoplisttitle[i]+'</span>'
                                +'<div>'
                                    +'<span>'+result.shoplistmoney[i]+'</span>'
                                    +'<span>立即购买</span>'
                                +'</div>'
                            +'</li>';
        }
    }
});

//...
var nav_2=document.getElementsByClassName('nav_2')[0];
var navList=document.getElementsByClassName('navList')[0];
nav_2.onclick=function(){
    navList.style.display='block';
};
//返回
function pageScroll(){
    window.scrollBy(0,-80);
    scrolldelay=setTimeout('pageScroll()',100);
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop === 0) {
        clearTimeout(scrolldelay)
    }
}
var zy=document.getElementsByClassName('zy')[0];
var nav_img2=document.getElementsByClassName('nav_img2')[0];
zy.onclick=function(){
    pageScroll();
};
window.onscroll=function(){
    if(document.documentElement.scrollTop||document.body.scrollTop<nav_img2.offsetTop){
        zy.style.display='none';
    }else{
        zy.style.display='block';
    }
}