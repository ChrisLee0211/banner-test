# banner-test
简单的banner图轮子留存
## 说明：
> 用原生JS写的，CSS用盒子模型固定了布局，基本是按照图片的尺寸设置的宽高，基本写死了，因为主要是联系轮播的JS逻辑，并没有做成自适应。

## 实现功能
1. 设置了setInterval，鼠标没有触碰到内容时会在2秒后开始轮播；
2. 鼠标停留到导航栏的时候，clear掉了定时任务，离开后等待2秒重新开始；
3. 图随字动基本靠的是设置一个全局变量来当索引，比较简陋。。。

## 效果预览
![image](https://github.com/ChrisLee0211/banner-test/blob/master/example01.gif)
