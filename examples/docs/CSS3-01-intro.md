:::doc CSS3介绍

# CSS3介绍

## 什么是CSS

CSS 是 Cascading Style Sheet（层叠样式表）的缩写。是用于（增强）控制网页样式并允许将样式信息与网页内容分离的一种标记性语言。CSS 不需要编译,可以直接由浏览器执行(属于浏览器解释型语言)。

CSS 支持多种设备，例如手机、电视、打印机、幻灯片等。但是 CSS 在浏览器上得到了更好的推广。

## 语法

selector {property: value;}

![Alt text](https://waylau.gitbooks.io/css3-tutorial/content/images/selector.jpg "The Stormtroopocat")

## 引入方式
### 三种方式将样式表加入您的网页：

#### 内联方式 Inline Styles
内联定义即是在对象的标记内使用对象的 style 属性定义适用其的样式表属性。 示例代码：
> <p style="color:#f00">这一行的字体颜色将显示为红色</p>

#### 内部样式块对象 Embedding a Style Block
你可以在你的 HTML 文档的`<head>`标记里插入一个`<style>`块对象。 示例代码：

```css
<style>
    .test2 {
        color: #000;
    }
</style>
```
#### 外部样式表 Linking to a Style Sheet
你可以先建立外部样式表文件*.css，然后使用 HTML 的 link 对象。或者使用 @import 来引入。 示例代码：

```html
<!-- Use link elements -->
<link rel="stylesheet" href="core.css">
```
```scss
<!-- Use @imports -->
<style>
  @import url("more.css");
</style>
```
:::
