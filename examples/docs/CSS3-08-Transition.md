::: doc CSS3介绍

# CSS3 过渡

CSS3中，我们为了添加某种效果可以从一种样式转变到另一个的时候，无需使用Flash动画或JavaScript。CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 ==:hover，:active== 或者通过 JavaScript 实现的状态变化。

语法：

> transition: *transition-property transition-duration [transition-timing-function=ease] [transition-delay=0s]*

要实现这一点，必须规定两项内容：

- 指定要添加效果的CSS属性
- 指定效果的持续时间。

```css
div
{
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */
}
```

==注意： 如果未指定的期限，transition将没有任何效果，因为默认值是0。==

## 多项改变
要添加多个样式的变换效果，添加的属性由==逗号==分隔：

```css
div
{
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```

## 过渡属性
下表列出了所有的过渡属性:

|属性| 描述 |
|--- | -----|
|transition	|简写属性，用于在一个属性中设置四个过渡属性。|
|transition-property|	规定应用过渡的 CSS 属性的名称。	|
|transition-duration|	定义过渡效果花费的时间。默认是 0。|	
|transition-timing-function|	规定过渡效果的时间曲线。默认是 "ease"。|	
|transition-delay|	规定过渡效果何时开始。默认是 0。|

栗子： https://codepen.io/wonderfultommy/pen/agjzRd

:::