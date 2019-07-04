::: doc CSS3介绍
# CSS 渐变色 Gradient Color

CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。

以前，你必须使用图像来实现这些效果。但是，通过使用 CSS3 渐变（gradients），你可以==减少下载的时间和宽带的使用==。此外，==渐变效果的元素在放大时看起来效果更好==，因为渐变（gradient）==是由浏览器生成的==。

CSS3 定义了两种类型的渐变（gradients）：

- 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
- 径向渐变（Radial Gradients）- 由它们的中心定义

浏览器支持： IE10 及以上

## 线性渐变

语法：

``` css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```
`direction`: 从上到下（默认情况下）to bottom, to top...(水平，垂直), to top right
`color-stop`: rgb or rgba 色阶值%

``` css
background: linear-gradient(red, green);
background: linear-gradient(to right, red, green);
background: linear-gradient(to right bottom, red, green);
```
### 使用角度
如果你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向（to bottom、to top、to right、to left、to bottom right，等等）。

语法
``` css
background: linear-gradient(angle, color-stop1, color-stop2);
```

角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。

<img src="https://www.runoob.com/wp-content/uploads/2014/07/7B0CC41A-86DC-4E1B-8A69-A410E6764B91.jpg" alt="angle" width="200" />

### 多个颜色点

``` css
background: linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet);
```

### 使用透明度（transparent）
CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。

为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：

``` css
 background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
```
### 重复的线性渐变
repeating-linear-gradient() 函数用于重复线性渐变：

语法
```css
{
    background: repeating-linear-gradient(direction|angle, color-stop1, color-stop2);    
}
```

## CSS3 径向渐变
径向渐变由它的中心定义。

为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

```css
{
    background: radial-gradient(center, shape size, start-color, ..., last-color);
}
```

```css
{
  background: radial-gradient(red, green, blue); /*颜色结点均匀分布（默认情况下）*/
  background: radial-gradient(red 5%, green 15%, blue 60%); /*颜色结点不均匀分布*/
  
}
```

### 设置形状
shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。==默认值是 ellipse。==

```css
{
    background: radial-gradient(circle, red, yellow, green); 
}
```

### 不同尺寸大小关键字的使用 Extentd-Keyword
size 参数定义了渐变的大小。它可以是以下四个值：

- closest-side 与圆心最近的边相切
- farthest-side 与圆心最远的边相切
- closest-corner 与圆心最近的角相交
- farthest-corner 与圆心最远的角相交

### 圆心位置 Position

- center
- top | botom, left | right 

```css
{
    background: radial-gradient(circal at 60% 55%, blue,green,yellow,black);
    background: radial-gradient(closest-side at 60% 55%, blue,green,yellow,black);
    background: radial-gradient(ellipse at top left, blue,green,yellow,black);
}
```

栗子： https://codepen.io/wonderfultommy/pen/ZdvYVr

:::