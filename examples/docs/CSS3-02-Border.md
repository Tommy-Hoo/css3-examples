::: doc CSS3介绍
# CSS3 边框
用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。

在本章中，您将了解以下的边框属性：

- border-radius
- box-shadow
- border-image

## CSS3 圆角
在 CSS2 中添加圆角棘手。我们不得不在每个角落使用不同的图像。

在 CSS3 中，很容易创建圆角。

在 CSS3 中 border-radius 属性被用于创建圆角：

这是圆角边框！ 

<div style="width:100px;height:100px;border:2px solid;text-align:center;
border-radius:10px / 50%;">Hello</div><br/>

### CSS 属性 border-radius

允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个(椭)圆与边框的交集形成圆角效果。

![Border Radius](https://developer.mozilla.org/files/3638/border-radius-sh.png "Border Radius")

``` css
    border-radius: 30px; 
    border-radius: 25% 10%;
    border-radius: 10% 30% 50% 70%; 
    border-radius: 10% / 50%;
    border-radius: 10px 100px / 120px;
    border-radius: 50% 20% / 10% 40%;
```

**length 定义圆形半径或椭圆的半长轴，半短轴。负值无效。** 

**% 使用百分数定义圆形半径或椭圆的半长轴，半短轴。水平半轴相对于盒模型的宽度；垂直半轴相对于盒模型的高度。负值无效。**

该属性是一个 简写属性，是为了将这四个属性 `border-top-left-radius`、`border-top-right-radius`、`border-bottom-right-radius`，和 `border-bottom-left-radius` 简写为一个属性。

``` css
border-radius: 1em/5em;

/* 等价于： */

border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```
``` css
border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */

border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

详见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius


## 盒子阴影 box-shadow 属性

CSS3 box-shadow 属性适用于盒子阴影，==阴影不占会对文档流产生影响==。

- 可以给阴影添加颜色
- 给阴影添加一个模糊效果
- 也可以在 ::before 和 ::after 两个伪元素中添加阴影效果

语法：==(可设置多个阴影用","逗号分隔并依次向下叠加)==

> box-shadow: [inset] h-offset v-offset blur-radius spread-radius; 

<div style="margin:20px;border:1px solid #ccc;height:50px; width:100px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">Box Shadow</div>

```css
div {
    box-shadow: 10px 10px 5px #888888; 
    box-shadow: 10px 10px grey;     /*阴影添加颜色*/
    box-shadow: 10px 10px 5px grey; /*添加一个模糊效果*/
    box-shadow: inset 10px 10px 5px 10px grey; /*内侧阴影*/
}

div::after, div::before{
    box-shadow: 10px 10px 5px grey;  
}
```

### border-image

有了 CSS3 的 border-image 属性，你可以使用图像创建一个边框：

border-image 属性允许你指定一个图片作为边框！ 用于创建上文边框的原始图像：
在 div 中使用图片创建边框:

:::