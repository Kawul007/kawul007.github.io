---
title: CSS布局--浮动Float
tags:
  - 前端相关
  - CSS
  - HTML
categories:
  - 前端相关
  - CSS
keywords: 前端相关、CSS、HTML
description: 用对float布局便会发现一个新世界~搞出更多有趣布局啦🥳
cover: /img/blog-img30.jpg
abbrlink: 8baa85b6
aside: true
date: 2022-07-15 10:17:14
swiper_index: 1
---

## Float 布局

> 把一个元素“浮动”(float) 起来，会改变该元素本身和在正常布局流（normal flow）中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流 (normal flow) 中移除，这时候其他的周围内容就会在这个被设置浮动 (float) 的元素周围环绕。</br>

### 属性值

```css
float: none; //无浮动特性
float: right; //向右
float: left; //向左
```

### 清除浮动

1. `clear` 类 可选择 `left`、`right`、`both` 等值

```css
.cleared {
  clear: left; //可选择right/left/both来停止任何活动的右/左/左右浮动
}
```

2. 父级添加 `overflow` 属性，但是无法显示溢出区的部分
3. 伪类 向包含浮动内容及其本身的盒子后方插入一些生成的内容，并将生成的内容清除浮动。

```css
.wrapper::after {
  content: ""; //必须要有
  clear: both;
  display: block;
}
```

4. 双伪类

```css
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
```

## 定位 Position

 俗话说，定位就是让盒子定再某一个位置上，所以定位也是摆盒子，可以用来布局，当然与 `float`(浮动盒子)不一样的是，`position` 可以自定义元素脱离文档流或者是保持原样。根据属性值不同，元素所表现出来的位置变化也不同。因此
 **定位 = 定位模式 _属性值_ + _偏移量_**</br>

### 属性值

1. `static` 静态定位 </br>
    - 默认的定位方式，可以理解为无定位
2. `relative` 相对定位
    - 是相对于他原来的位置来说的（自恋型）
      **会保留原先的位置，不脱标，持续保留原来位置**
3. `absolute` 绝对定位</br>
    - 若没有祖先元素或者祖先元素没有定位，则会以浏览器为准定位;</br>
    - 若祖先元素有定位【任意一种都可以】，那么它就以祖先元素为准定位最近拥有元素定位的模块来定位标准，父级去找没有去找祖籍也没有就找浏览器;</br>
    - **绝对定位不在占用原先的位置;**</br>
    - 小技巧：子绝父相----如果子级使用绝对定位，那么父级则需要相对定位

4. `fixed` 固定定位

   - 元素固定于浏览器的可视区的位置
   - 主要使用场景：可以在浏览器的页面滚动时元素的位置保持不变浏览器的可视窗口为参考点移动元素，不随滚挡条滚动，不再占有原先的位置
   - 小技巧：固定在版心的右侧位置上 先 `left：50%`位于浏览器中间，再相对于版心选择外边距，让他固定在版心的右侧上;</br>

5. `sticky` 粘性定位

  - 粘性定位可以被认为是相对定位和固定定位的混合；
   以浏览器的可视化窗口作为参考点移动同时它占有原先的定位
   必须添加一个偏移量，才能起效！！！！</br>

| 定位模式          |       是否脱标       |           位置移动 |
| :---------------- | :------------------: | -----------------: |
| `static` 静态定位   |          否          |           无偏移量 |
| `relative` 相对定位 |  否（占有原来位置）  |   相对自身位置移动 |
| `absolute` 绝对定位 | 是（不占有原来位置） | 相对带有定位的父级 |
| `fixed` 固定定位    | 是（不占有原来位置） |   相对浏览器可视区 |
| `sticky` 粘性定位   |  否（占有原来位置）  | 相对于浏览器可视区 |