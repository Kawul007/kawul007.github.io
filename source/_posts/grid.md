---
title: CSS布局--Grid布局
tags:
  - 前端相关
  - CSS
  - HTML
categories:
  - 前端相关
  - CSS
keywords: 前端相关、CSS、HTML
cover: /img/blog-img51.jpg
description: 要是早点会用grid布局多好！可以省下很多时间做网页整体布局🤡
aside: true
abbrlink: 21eaa247
swiper_index: 10
date: 2022-07-15 10:21:06
---
# Grid布局

>CSS 网格布局引入了**二维网格布局系统**，可用于布局页面主要的区域布局或小型组件Grid是由一系列水平及垂直的线构成的一种布局模式。根据Grid，能够将设计元素进行排列，设计一系列具有固定位置以及宽度的元素的页面，使网站页面更加统一。一个Grid布局通常具有许多的列（column）与行（row），以及行与行、列与列之间的间隙，这个间隙一般被称为沟槽（gutter）。跟弹性盒子一样只需给父级盒子添加``display:grid``其子项会变成网格项。


## `grid-template-columns` & `grid-template-rows`

属性来定义网格中的行和列。这些属性定义了网格的轨道。一个网格轨道就是网格中任意两条线之间的空间。属性取值：
`repeat(3,1fr)` === `auto auto auto` === `1fr 1fr 1fr` </br>其中`1fr`是网格容器中可用空间的一等份,通过`repeat()`来设置重复值；3个`auto`属性意味着吧容器中的可用空间3等分；

## `grid-columns-gap` & `grid-row-gap`
属性来控制列和行之间的间隔；缩写为`grid-gap`;

## `justify-content` & `align-content` 

分别用于在容器内对齐整个网格和垂直对齐容器内的整个网格 ;
与弹性盒子一样可取值:`space-evenly` 、`space-around`、`space-between`、`center`、`start`、`end`等取值，其相应效果跟弹性盒子一样。</br>
_注意： 网格的总宽度必须小于容器的宽度，这样 justify-content 属性才能生效_

## `grid-row` & `grid-column`

`grid-row` 属性是 grid-row-start 和 grid-row-end 属性的简写属性。如需放置项目，您可以引用行号，或使用关键字 "span" 定义该项目将跨越多少行;`grid-column`属性是 grid-column-start 和 grid-column-end 属性的简写属性。如需放置某个项目，您可以引用行号（line numbers），或使用关键字 "span" 来定义该项目将跨越多少列;
```css
.item1 {
  grid-row: 1 / 4; /*使 "item1" 在 row-line 1 开始，在 row-line 4 结束：*/
}
.item1 {
  grid-column: 1 / 5; /*使 "item1" 从第 1 列开始并在第 5 列之前结束;*/
}
.item1 {
  grid-row: 1 / span 2;/*使 "item1" 从第 1 行开始并跨越 2 行：*/
}
.item1 {
  grid-column: 1 / span 3; /*使 "item1" 从第 1 列开始，并跨越 3 列：*/
}
```

## `grid-area` 

可以用作 `grid-row-start` 、`grid-column-start` 、`grid-row-end` 和 `grid-column-end` 属性的简写属性;
```css
.item55 {
  grid-area: 1 / 2 / 5 / 6;/*使 "item55" 从 row-line 1 和 column-line 2 开始，
  在 row-line 5 和 column line 6 结束：*/
}
.item88 {
  grid-area: 2 / 1 / span 2 / span 3;
  /*使 "item88" 从 row-line 2 和 column-line 开始，并跨越 2 行和 3 列：*/
}
```

