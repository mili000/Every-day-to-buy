var sort=document.getElementById('sort');
var mLi=document.getElementById('sort').getElementsByTagName('li')[0];
var content=document.getElementById('content');
var re,a;
$.ajax({
    url:'http://iwen.wiki/zhichenshop/shopping/homecategorysearch/leftmenu.php',
    type:'get',
    dataType:'json',
    success:function(result){
        for(var i=0;i<result.length;i++){
            sort.innerHTML+='<li class=\"'+(i==0?'select':'')+'\"><a href=\"#'+i+'\" name=\"'+i+'\">'+result[i]+'</a>';
        }
    }
});
$.ajax({
    url:'http://iwen.wiki/zhichenshop/shopping/homecategorysearch/category.php',
    type:'get',
    dataType:'json',
    success:function(result){
        for(var i=0;i<result.length;i++){
            var contentIn='';
            for(var j=0;j<result[i].fruitimg.length;j++){
                contentIn+='<a href=\"#\">'
                    +'<img src=\"'+result[i].fruitimg[j]+'\" alt=\"\"/>'
                    +'<p>'+result[i].fruitdesc[j]+'</p>'
                    +'</a>';
            }
            content.innerHTML+='<dl id=\"content_box\">'
                +'<dt class=\"fruit\">'+result[i].fruit+'</dt>'
                +'<dd>'+contentIn+'</dd>'
                +'</dl>';
        }

    },
    data:{category:'水果蔬菜'}
});
document.getElementById('sort').onclick=function(e){
    if(e.target.nodeName.toLowerCase()=='a'){
        var ali=e.target.parentNode.parentNode.getElementsByTagName('li');
        for(var i=0;i<ali.length;i++){
            if(ali[i]== e.target.parentNode){
                ali[i].className='select';
            }else{
                ali[i].className='';
            }
        }
        var category=e.target.innerHTML;
        content.innerHTML='';
        $.ajax({
            url:'http://iwen.wiki/zhichenshop/shopping/homecategorysearch/category.php',
            type:'get',
            dataType:'json',
            success:function(result){
                for(var i=0;i<result.length;i++){

                        var contentIn='';
                        for(var j=0;j<result[i].fruitimg.length;j++){
                            contentIn+='<a href=\"#\">'
                                                    +'<img src=\"'+result[i].fruitimg[j]+'\" alt=\"\"/>'
                                                    +'<p>'+result[i].fruitdesc[j]+'</p>'
                                        +'</a>';
                        }
                    content.innerHTML+='<dl id=\"content_box\">'
                        +'<dt class=\"fruit\">'+result[i].fruit+'</dt>'
                            +'<dd>'+contentIn+'</dd>'
                        +'</dl>';
                    }

                },
            data:{category:category}
        });
    }
};