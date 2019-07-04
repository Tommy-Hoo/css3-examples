::: doc CSS3介绍
# CSS3 转换
CSS3 转换可以可以对元素进行移动、缩放、转动、拉长或拉伸。

## 2D 转换
在本章您将了解2D变换方法(Transform Founction)：

- translate()
- rotate()
- scale()
- skew()
- matrix()

语法：支持多个变换方法用`(space)`分隔。

> transfrom: *none | Transform_Founction[ Transform_Founction ...]*;


```css
div
{
    transform: rotate(30deg);
    -ms-transform: rotate(30deg); /* IE 9 */
    -webkit-transform: rotate(30deg); /* Safari and Chrome */
}
```

栗子： https://codepen.io/wonderfultommy/pen/YoaOLL

### transform-origin	

允许您更改转化元素位置，参考点

语法：

> transform-origin: *x-axis y-axis z-axis*;

> transform-origin: *center*;<br>
> transform-origin: *top left right bottom*;<br>
> transform-origin: *50px -50px*;<br>
> transform-origin: *50% -50%*;<br>


```css
div{
    transform-origin: 50% 50% 50%; /*2D变换会忽略z-axis值*/
}

div{
    transform-origin: 50% 50%; /*z-axis默认值为0*/
}
```

|值	   |描述|
|--------------|--|
|x-axis	       | 定义视图被置于 X 轴的何处。<br>可能的值：<br><ul><li>left</li><li>center</li><li>right</li><li>length</li> <li>%</li></ul>|
|y-axis	       | 定义视图被置于 Y 轴的何处。<br>可能的值：<ul><li>top</li><li>center</li><li>bottom</li><li>length</li><li>%</li></ul>
|z-axis	| 定义视图被置于 Z 轴的何处。<br>可能的值：<br> length
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





## 2D 转换方法
函数 | 描述
|--|--|
|matrix(n,n,n,n,n,n)|	定义 2D 转换，使用六个值的矩阵。
|translate(x,y)|	定义 2D 转换，沿着 X 和 Y 轴移动元素。
|translateX(n)|	定义 2D 转换，沿着 X 轴移动元素。
|translateY(n)|	定义 2D 转换，沿着 Y 轴移动元素。
|scale(x,y)|	定义 2D 缩放转换，改变元素的宽度和高度。
|scaleX(n)|	定义 2D 缩放转换，改变元素的宽度。
|scaleY(n)|	定义 2D 缩放转换，改变元素的高度。
|rotate(angle)|	定义 2D 旋转，在参数中规定角度。
|skew(x-angle,y-angle)|	定义 2D 倾斜转换，沿着 X 和 Y 轴。
|skewX(angle)|	定义 2D 倾斜转换，沿着 X 轴。
|skewY(angle)|	定义 2D 倾斜转换，沿着 Y 轴。













## 3D 转换

CSS3 允许您使用 3D 转换来对元素进行格式化。

在本章中，您将学到其中的一些 3D 转换方法：

- rotateX()
- rotateY()

### rotateX() 方法
![Rotate X](http://www.runoob.com/images/transform_rotatex.gif)

rotateX()方法，围绕其在一个给定度数X轴旋转的元素。

```css
div
{
    transform: rotateX(120deg);
    -webkit-transform: rotateX(120deg); /* Safari 与 Chrome */
}
```

### rotateY() 方法

![Rotate Y](http://www.runoob.com/images/transform_rotatey.gif)

rotateY()方法，围绕其在一个给定度数Y轴旋转的元素。

```css
div
{
    transform: rotateY(130deg);
    -webkit-transform: rotateY(130deg); /* Safari 与 Chrome */
}
```

### 3D 转换方法
|函数 |	描述 |
|--  |-- |
|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) |	定义 3D 转换，使用 16 个值的 4x4 矩阵。
|translate3d(x,y,z)	|定义 3D 转化。
|translateX(x)	|定义 3D 转化，仅使用用于 X 轴的值。
|translateY(y)	|定义 3D 转化，仅使用用于 Y 轴的值。
|translateZ(z)	|定义 3D 转化，仅使用用于 Z 轴的值。
|scale3d(x,y,z)	|定义 3D 缩放转换。
|scaleX(x)	|定义 3D 缩放转换，通过给定一个 X 轴的值。
|scaleY(y)	|定义 3D 缩放转换，通过给定一个 Y 轴的值。
|scaleZ(z)	|定义 3D 缩放转换，通过给定一个 Z 轴的值。
|rotate3d(x,y,z,angle)	|定义 3D 旋转。
|rotateX(angle)	|定义沿 X 轴的 3D 旋转。
|rotateY(angle)	|定义沿 Y 轴的 3D 旋转。
|rotateZ(angle)	|定义沿 Z 轴的 3D 旋转。
|perspective(n)	|定义 3D 转换元素的透视视图。该参数是一个 <length> 给定从用户（显示屏）到z = 0平面的距离。 它用于将透视图转换应用于元素。 如果它是0或负值，则不应用透视变换。

Referrence MDN Transform Founction : https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function


https://codepen.io/wonderfultommy/pen/YoaOLL

| 属性 | 描述 |
| ---  | ----|
| transform-style |	规定被嵌套元素如何在 3D 空间中显示。|
| perspective |	规定 3D 元素的透视效果。|	
| perspective-origin |	规定 3D 元素的底部位置。|	
| backface-visibility |	定义元素在不面对屏幕时是否可见。|	



:::