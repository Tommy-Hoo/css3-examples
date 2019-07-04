::: doc CSS3介绍
# CSS3 文本效果
CSS3中包含几个新的文本特征。

在本章中您将了解以下文本属性：

- text-shadow
- box-shadow
- text-overflow
- word-wrap
- word-break

## 文本阴影 text-shadow 属性
CSS3 中，text-shadow属性适用于文本阴影。

阴影效果!

<h1 style="text-shadow: 5px 5px 5px #FF0000, 10px 10px 5px #0f0;">Text Shadow Effect</h1>

您指定了水平阴影，垂直阴影，模糊的距离，以及阴影的颜色：

语法：==(可设置多个阴影用","逗号分隔并依次向下叠加)==

> text-shadow: h-shadow v-shadow blur color; 

```css
h1
{
    text-shadow: 5px 5px 5px #FF0000, 10px 10px 5px #0f0;
}
```

## Text Overflow属性

CSS3文本溢出属性指定应向用户如何显示溢出内容

这个属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素内联(inline)方向一致（举个反例：内容在盒子的下方溢出。此时就不会生效）。文本可能在以下情况下溢出：当其因为某种原因而无法换行(例子：设置了"white-space:nowrap")，或者一个单词因为太长而不能合理地被安置(fit)。

这个属性并不会强制“溢出”事件的发生，因此为了能让"text-overflow"能够生效，程序员们必须要在元素上添加几个额外的属性，==比如"将overflow 设置为hidden"和 white-space:nowrap。==

语法：<string>只有FF支持 -moz-text-overflow:">>";

> text-overflow: [ clip | ellipsis | <string> ];

<p style="white-space: nowrap; 
    width: 200px;
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip;">This is some long text that will not fit in the box</p>
    
<p style="white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis;">This is some long text that will not fit in the box</p>

```css
p.test1 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip; 
}
 
p.test2 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis; 
}
```

## 文本换行 overflow-wrap (word-wrap)

**注：word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap 。 word-wrap 现在被当作 overflow-wrap 的 “别名”。 稳定的谷歌 Chrome 和 Opera 浏览器版本支持这种新语法。**

如果某个单词太长，不适合在一个区域内，它扩展到外面：

CSS3中，自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字,换句话说，只有当一个单词一整行都显示不下时，才会拆分换行该单词。

语法：

> word-wrap: normal | break-word;

```css
p {
    word-wrap:break-word;
}
```

## 单词拆分换行 word-break
CSS3 单词拆分换行属性指定换行规则

> word-break: keep-all | break-all;

```css
p.test1 {
    word-break: keep-all;
}
 
p.test2 {
    word-break: break-all;
}
```

## white-space 

normal
: 连续的空白符会被合并，换行符会被当作空白符来处理。填充line盒子时，必要的话会换行。

nowrap
: 和 normal 一样，连续的空白符会被合并。但文本内的换行无效。

pre
: 连续的空白符会被保留。在遇到换行符或者<br>元素时才会换行。

pre-wrap
: 连续的空白符会被保留。在遇到换行符或者<br>元素，或者需要为了填充line盒子时才会换行。

pre-line
: 连续的空白符会被合并。在遇到换行符或者<br>元素，或者需要为了填充line盒子时会换行。


## white-space,word-break,word-wrap(overflow-wrap) 对比
white-space
: 控制空白字符的显示，同时还能控制是否自动换行。它有五个值：==normal | nowrap | pre | pre-wrap | pre-line==

word-break
: 控制单词如何被拆分换行。它有三个值：==normal | break-all | keep-all==

word-wrap（overflow-wrap）
: 控制长度超过一行的单词是否被拆分换行，是word-break的补充，它有两个值：==normal | break-word==

栗子： https://codepen.io/wonderfultommy/pen/orEmmN
 
## word-spacing

控制空白字符的宽度

栗子： https://codepen.io/wonderfultommy/pen/orEmmN

## text-align-last Safari不支持

设置文本最后一行的对齐方式。

> auto, left, right, center, justify, start, end, initial

MDN： https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last

## text-emphasis 
设置文本着重语气，为以下两个Rule的Shorthand规则：
- text-emphasis-style
- text-emphasis-color

浏览器支持度不高

MDN：https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis





:::