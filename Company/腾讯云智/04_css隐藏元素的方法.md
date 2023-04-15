css隐藏元素的方法
- 1、使用display: none；**可以完全隐藏元素，同时也不占据空间。**
    - 注意，使用display: none隐藏元素后，无法通过JavaScript获取到该元素。
- 2、visibility: hidden
    - 使用visibility: hidden；**可以隐藏元素，但仍占据空间。**
- 3、opacity: 0
    - 使用opacity: 0；可以将元素透明度设置为0，达到隐藏的效果。元素仍然占据空间。
- 4、width: 0; height: 0
    - 使用width: 0; height: 0可以将元素的宽度和高度都设置为0，达到隐藏的效果。元素仍然占据空间。
- 总结
    - 需要注意的是，display: none和visibility: hidden是最常用的两种方法，但它们的**区别在于前者不占据空间，后者占据空间**。如果需要完全隐藏元素并且不占据空间，使用display: none；如果需要隐藏元素但仍然占据空间，使用visibility: hidden。



