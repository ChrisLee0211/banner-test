var btn=document.getElementById("btn").getElementsByTagName("div");
        banner=document.getElementById("banner").getElementsByTagName("div");
        index=0;
        timer=null;
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
            btn[i].onmouseover=function(){
                removePlay()
                var idx = this.getAttribute("data-index");
                itemShow(idx)
            btn[i].onmouseout=autoPlay()
            }
            
        }
        // 设置自动播放
        function autoPlay(){
            timer=setInterval(function(){
                itemShow(index)
                index++;
                if(index>=btn.length){
                    index=0
                }
            },2000)
        }
        autoPlay()
        // 清除定时轮播
        function removePlay(){
            if(timer){
                clearInterval(timer)
            }
        }