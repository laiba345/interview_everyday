CSS选择器及优先级
- 选择器
    - id选择器(#myid)
    - 类选择器(.myclass)
    - 属性选择器(a[rel="external"])
    - 伪类选择器(a:hover, li:nth-child)
    - 标签选择器(div, h1, p)
    - 伪元素选择器(p::first-line)
    - 相邻选择器（h1 + p）
    - 子选择器(ul > li)
    - 后代选择器(li a)
    - 通配符选择器(*)
- 优先级
    - !important
    - 内联样式(1000)
    - ID选择器(0100)
    - 类选择器/属性选择器/伪类选择器(0010)
    - 标签选择器/伪元素选择器(0001)
    - 关系选择器/通配符选择器(0000)
- 带 !important 标记的样式属性优先级最高；样式表的来源相同时：!important > 行内样式> ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
- 行内样式
    - CSS中的行内样式是在HTML标签内部使用style属性来定义的样式
    ```
    <h1 style="color: blue; font-size: 24px;">This is a heading</h1>
    ```
    - 在这个例子中，style属性定义了该h1标签的颜色和字体大小。行内样式的优点是可以快速地应用样式，而不必在CSS文件中定义，但不易维护。