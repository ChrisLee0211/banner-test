
window.onload=function(){
    btn=document.getElementById("btn").getElementsByTagName("div");
    banner=document.getElementById("banner").getElementsByTagName("div");
    main=document.getElementById("main");
    timer=null;
    index=0;

     //鼠标停留，停止轮播
        main.onmouseover=function(){
            removePlay()
        }
        main.onmouseout=function(){
            autoPlay()
        }

        // 点击导航，轮播跟随变动
        function itemShow(value){
            for(var k=0;k<btn.length;k++){
                if(k==value){
                    btn[k].className="nav-item item-active";
                    banner[k].className="banner-item show"
                }else{
                    btn[k].className="nav-item";
                    banner[k].className="banner-item"
                }
            }
        }
        // for循环里的i作用域于onmouseover的function不同，因此要自定义属性传进去，在function里再拿出来
        for(var i=0;i<btn.length;i++){
            btn[i].setAttribute("data-index",i);
            btn[i].onclick=function(){
                removePlay()
                var idx = this.getAttribute("data-index");
                itemShow(idx)
            
            }
            
        }
        // 设置自动播放
        function autoPlay(){
            timer=setInterval(function(){
                index++;
                if(index>=btn.length){
                    index=0
                }
                itemShow(index)
            },1000)
        }
        autoPlay()
        // 清除定时轮播
        function removePlay(){
            if(timer){
                clearInterval(timer)
            }
        }
}

       