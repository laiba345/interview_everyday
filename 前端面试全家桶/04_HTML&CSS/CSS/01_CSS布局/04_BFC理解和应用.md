BFC的理解和应用
- block format context；块级格式化上下文
- 一块独立渲染区域；内部元素的渲染不会影响边界以外的元素

形成BFC的常见条件
- float不是none
- position是absolute或fixed
- overflow不是visible
- display是flex、inline-block等

BFC的常见应用
    - 清除浮动(在style标签中)
    ```
    .bfc {
        overflow:hidden
    }
    然后在各个元素标签中加上class为bfc
    容器加上bfc：即使浮动了，图片也不会撑开跑出去
    ```
