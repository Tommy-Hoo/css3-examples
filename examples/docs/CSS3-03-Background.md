::: doc CSS3介绍
# CSS3 背景
CSS3中包含几个新的背景属性，提供更大背景元素控制。

在本章您将了解以下背景属性：

- background-image
- background-size
- background-origin
- background-clip

## background-image属性
CSS3中可以通过background-image属性添加背景图片。

==不同的背景图像和图像用逗号隔开==，==所有的图片中显示在最顶端的为第一张==。

```css
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
```

可以给不同的图片设置多个不同的属性

```css
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```

## background-size 属性

background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

你指定的大小是相对于父元素的宽度和高度的百分比的大小。

```css
div
{
    background:url(img_flwr.gif);
    background-size:80px 60px; /*指定背景图片的大小*/
    background-repeat:no-repeat;
}

div
{
    background:url(img_flwr.gif);
    background-size:100% 100%; /*伸展背景图像完全填充内容区域*/
    background-repeat:no-repeat;
}
```
## background-Origin属性

background-Origin属性指定了背景图像的位置区域。

- content-box
- padding-box
- border-box

content-box, padding-box 和 border-box 区域内可以放置背景图像。

![background-Origin](https://www.runoob.com/images/background-origin.gif, "background-Origin")

```css
div
{
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
}
```
## background-clip属性
CSS3中background-clip背景剪裁属性是从指定位置开始渲染。

- content-box
- padding-box
- border-box
- text (需要加前缀)

```css
#example1 { 
    border: 10px dotted black; 
    padding: 35px; 
    background: yellow; 
    background-clip: content-box; 
}
```

- 注：当==Backgound为repeat时或者指定了background-color==，如果指定了background-origin 背景图仍然会平铺且占满整个容器面积，除非指定了background-clip属性。

```css
b{
    background: url(https://www.runoob.com/try/demo_source/paper.gif)  repeat;
    origin: border-box;
    backgournd-clip: content-box;
}
```
### background-attachment

- fixed
- contain
- local


栗子： https://codepen.io/wonderfultommy/pen/bPLmEe





:::