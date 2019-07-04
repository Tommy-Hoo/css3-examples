::: doc CSS3介绍
# CSS3 Font

## @font-face 规则

以前 CSS3 的版本，网页设计师不得不使用用户计算机上已经安装的字体。

使用 CSS3，网页设计师可以使用他/她喜欢的任何字体。

当你发现您要使用的字体文件时，只需简单的将字体文件包含在网站中，它会自动下载给需要的用户。

您所选择的字体在新的 CSS3 版本有关于 @font-face 规则描述。

您"自己的"的字体是在 CSS3 @font-face 规则中定义的。


## 使用您需要的字体

在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

**注：提示：URL请使用小写字母的字体，大写字母在IE中会产生意外的结果**

```html
<style> 
@font-face
{
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
 
div
{
    font-family:myFirstFont;
}
</style>
```
## 使用粗体文本

```css
@font-face
{
    font-family: myFirstFont;
    src: url(sansation_bold.woff);
    font-weight:bold;
}
```

## CSS3 字体描述
下表列出了所有的字体描述和里面的@font-face规则定义：

| 描述符 | 值 | 描述 |
| --------- | ----------- | -------- |
|font-family |	name	| 必需。规定字体的名称。|
|src	|URL	|必需。定义字体文件的 URL。例如： url(), local()
|font-stretch | normal<br>condensed<br>ultra-condensed<br>extra-condensed<br>semi-condensed<br>expanded<br>semi-expanded<br>extra-expanded<br>ultra-expanded |	可选。定义如何拉伸字体。默认是 "normal"。
|font-style | normal<br>italic<br>oblique | 可选。定义字体的样式。默认是 "normal"。
|font-weight | normal<br>bold<br>100<br>200<br>300<br>400<br>500<br>600<br>700<br>800<br>900 | 可选。定义字体的粗细。默认是 "normal"。
unicode-range |	unicode-range | 可选。定义字体支持的 UNICODE 字符范围。默认是 "U+0-10FFFF"。

## 注意
- 这里使用的Web fonts 仍然受到同域限制  (字体文件必须和调用它的网页同一域), 但可以使用 HTTP access controls 解除这一限制。
- 因为这里没有为 TrueType(ttf), OpenType(otf) 和 Web Open File Format(WOFF) 字体定义MIME，因此不能为这些字体类型设置特定的MIME（实际上WOFF的MIME将会是application/font-woff，但浏览器对此MIME的识别还不统一，其它字体情况也类似，可暂时使用application/octet-stream）。 
- 你不能在一个 CSS 选择器中定义 @font-face 。例如，这样写是无效的：


```css
.className { 
    @font-face { 
        font-family: MyHelvetica; 
        src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
            url(MgOpenModernaBold.ttf);
        font-weight: bold; 
    }
}
```

### 字体文件格式
TureTpe(.ttf,.otf)格式： 
: .ttf字体是Windows和Mac的最常见的字体，是一种RAW格式

Embedded Open Type(.eot)格式： .eot 
: 字体是IE专用字体，可以从TrueType创建此格式字体

Web Open Font Format(.woff)格式： 
: .woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离

Scalable Vector Graphics(.svg)格式： .svg 
: 字体是基于SVG字体渲染的一种格式,可缩放矢量图形

### 浏览器兼容性

- IE6 仅支持 Embedded OpenType(.eot) 格式。
- IE7 仅支持 Embedded OpenType(.eot) 格式。
- IE8 仅支持 Embedded OpenType(.eot) 格式。
- Firefox 3.5 支持 TrueType、OpenType(.ttf, .otf) 格式。
- Firefox 3.6 支持 TrueType、OpenType(.ttf, .otf) 及 WOFF 格式。
- Chrome 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。
- Safari 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。
- Opera 支持 TrueType、OpenType(.ttf, .otf) 及 SVG Font(.svg) 格式。
::: 