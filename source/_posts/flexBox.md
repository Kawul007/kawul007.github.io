---
title: CSS布局--FlexBox
effect: true
tags:
  - 前端相关
  - CSS
  - HTML
categories:
  - 前端相关
  - CSS
keywords: 前端相关、CSS、HTML
description: flexbox是前端开发当中最为常见的布局之一，掌握它拿下好看的瀑布流不在话下！🤩
cover: /img/blog-img101.jpg
abbrlink: 2784a893
aside: true
date: 2022-07-14 18:06:30
top-img:
swiper_index: 1
---
# FlexBox
>Flexible Box 模型，通常被称为 flexbox，是一种**一维的布局模型**。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。当使用 flex 布局时，首先想到的是两根轴线 — **主轴和交叉轴**。主轴由 flex-direction 定义，另一根轴垂直于它。父级容器属性要设置成```display:flex```

# Flex容器属性值
1. ``flex-direction`` -> 取值：row【从左到右】,row-reverse【从右到左】,column【从上到下】,column-reverse【从下到上】；
```css
.flex-container {
  display: flex;
  flex-direction: row;/*column,row-reverse,column-reverse*/
}
```
2. ``flex-wrap`` -> 取值：wrap【自行换行】,nowrap【默认值，不换行】,wrap-reverse【自行换行，从下到上排列元素】；
```css
.flex-container {
  display: flex;
  flex-wrap: wrap;/*nowrap,wrap-reverse*/
}
```
3. ``flex-flow`` 用于同时设置 flex-direction 和 flex-wrap 属性的简写属性,取值是``flex-direction``+``flex-wrap``值；
4. ``justify-content``**用于**水平对齐**flex项目**，</br>取值 -> ``center``【容器水平中心对齐】;``flex-start``【开头对齐（默认）】;
``flex-end``【末端对齐】;
``space-around``【显示行之前、之间和之后带有空格的 flex 项目，``space-evenly``平均 使用行之间、之前、之后的空格】;
``space-between``【显示行之间有空格的 flex 项目】
```css
.flex-container {
  display: flex;
  justify-content: space-between;/*用可取值替换*/
}
```
5. ``align-items`` **用于垂直对齐 flex 项目**</br>
取值 -> `center`【容器垂直中间对齐】；`flex-start`【容器顶部对齐】；`flex-end`【容器底部对齐】；`stretch`【拉伸 flex 项目以填充容器（默认），**PS:当容器内div元素设置了固定高度时，该属性无效**】；`baseline`【基线对齐】；
```css
.flex-container {
  display: flex;
  align-items: baseline;/*用可取值替换*/
}
```
6. `align-content` **用于对齐弹性线**</br>
取值 ->与其他属性类似有`space-between`、`space-around`、`center`、`stretch`(默认值)、`flex-start`以及`flex-end`等；原理也是如此，只是对齐方向有差异！

# 小技巧
1. 元素完美居中
只需要给元素添加: `justify-content:center(水平居中) & align-items:center(垂直居中)`即可；
2. Flex 的继承
拥有Flex属性的容器当中的盒子元素都具备有flex属性，同时可以给子元素设定order属性来改变元素的位置顺序；

# Flex属性
一般是通过`flex-grow flex-shrink flex-basis`来控制；
1. `flex-grow:`元素以`flex-basis`为基础，在容器内可用空间向主轴方向延展；若`flex-grow:1`则元素将会评分容器内的可用空间；若`flex-grow:2`则拥有该属性的元素比起其他没有的元素多占两倍的空间，以此类推；
2. `flex-shrink:`可以让元素缩小所用空间到`flex-basis`以下的值，与flex-grow属性一样，可以赋予不同的值来控制 flex 元素收缩的程度 —— 给flex-shrink属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大；
3. `flex-basis:` 用来定义元素的空间大小，默认值为`auto`元素没有定义宽度时，`flex-basis`采用元素内部内容大小；若元素有固定的宽度，`flex-basis`的值便是该固定值；同样的，也可以通过`flex-basis:数值px`来设定元素大小。

# 常用取值
1. `flex: initial` === `flex:0 1 auto`
代指flexbox的初始值，其中数值分别表示：`flex-grow:0`指盒子大小就是`flex-basis`大小；`flex-shrink：1`指可以缩小 flex 元素来防止它们溢出；`flex-basis：auto` Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的；
2. `flex: auto` === `flex: 1 1 auto`
和上面的 flex:initial 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩;
3. `flex: none` === `flex: 0 0 auto`
可以把 flex 元素设置为不可伸缩,元素既不能拉伸或者收缩，但是元素会按具有 flex-basis: auto 属性的 flexbox 进行布局;
4. `flex: <positive-number>`
例如`flex: 1` 或者 `flex: 2 `,它相当于flex: 1 1 0。元素可以在flex-basis为 0 的基础上伸缩；暨不增加，也不缩减。

# 使用案例---瀑布流

## 相关HTML代码&样式

```css
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
/* 创建并排的四个等列 */
.column {
  flex: 25%; /*相当于 flex: 25% 25% 0*/
  max-width: 25%;
  padding: 0 4px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
}
/* 响应式布局 - 创建两列而不是四列布局 */
@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
/* 响应式布局 - 创建上下堆叠而不是并排的两列布局 */
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

```
```html
 <div class="row">
      <div class="column">
        <img src="../img/blog-img28.jpg" style="width: 100%" />
        <img src="../img/blog-img29.jpg" style="width: 100%" />
        <img src="../img/blog-img30.jpg" style="width: 100%" />
        <img src="../img/blog-img31.jpg" style="width: 100%" />
        <img src="../img/blog-img40.jpg" style="width: 100%" />
        <img src="../img/blog-img34.jpg" style="width: 100%" />
      </div>
      <div class="column">
        <img src="../img/blog-img36.jpg" style="width: 100%" />
        <img src="../img/blog-img37.jpg" style="width: 100%" />
        <img src="../img/blog-img38.png" style="width: 100%" />
        <img src="../img/blog-img39.png" style="width: 100%" />
        <img src="../img/blog-img32.jpg" style="width: 100%" />
        <img src="../img/blog-img41.png" style="width: 100%" />
      </div>
      <div class="column">
        <img src="../img/blog-img44.jpg" style="width: 100%" />
        <img src="../img/blog-img45.jpg" style="width: 100%" />
        <img src="../img/blog-img46.jpg" style="width: 100%" />
        <img src="../img/blog-img47.jpg" style="width: 100%" />
        <img src="../img/blog-img48.jpg" style="width: 100%" />
        <img src="../img/blog-img49.jpg" style="width: 100%" />
      </div>
      <div class="column">
        <img src="../img/blog-img50.jpg" style="width: 100%" />
        <img src="../img/blog-img52.jpg" style="width: 100%" />
        <img src="../img/blog-img42.jpg" style="width: 100%" />
        <img src="../img/blog-img43.jpg" style="width: 100%" />
        <img src="../img/blog-img35.png" style="width: 100%" />
        <img src="../img/blog-img33.png" style="width: 100%" />
      </div>
    </div>
```
## 结果演示

![](/img/article01-1.png)






