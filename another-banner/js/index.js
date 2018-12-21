$(function(){
        var timer = null;
        var pre = $('.left');  //左按钮
        var next = $('.right')  //右按钮
        var icon=$('.dots');  //右下角圆点
        var banner = $('.banner');
        var len = banner.length;
        var main = $('.main') //主要容器，用于监听鼠标运动区域
        var index = 0
    // 自动轮播：加载开始即轮播
        function startAuto(){
            timer=setInterval(autoplay,2000)
        }
        startAuto()
    //鼠标离开后重新开始轮播
        main.mouseout(function(){
            startAuto()
        })
    // 鼠标在区域内停止轮播
        main.mouseover(function(){
            clearInterval(timer);
        })
        // 左右按钮
        pre.mouseover(function(){
            pre.addClass('icon-act')
        })
        pre.mouseout(function(){
            pre.removeClass('icon-act')
        })
        pre.click(function(){
            index-=1;
            if(index<0){
                index=len-1
            }
            imgChange()
        })
        next.mouseover(function(){
            next.addClass('icon-act')
        })
        next.mouseout(function(){
            next.removeClass('icon-act')
        })
        next.click(function(){
            index+=1
            if(index>=len){
                index=0
            }
           imgChange() 
        })
        // 右下角导航圆点
        icon.click(function(){
             index = $(this).index()
             imgChange()
        })
        // 自动播放
        function autoplay(){
            if(index < len-1){
                index++
            }else{
                index=0
            }
            imgChange()
        }

    // 图片切换函数
        function imgChange(){
            banner.removeClass('play')
            icon.removeClass('active')
            banner.eq(index).addClass('play')
            icon.eq(index).addClass('active')
        }
        
    })
    