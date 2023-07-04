css中如何设置垂直居中，行内元素如何设置垂直居中?
- css中如何设置垂直居中?
    - 对于块级元素，可以将其容器设置为 display: flex;，并使用 align-items: center; 将子元素垂直居中。例如：
    ```
    .container {
        display: flex;
        align-items: center;
    }
    ```
- 对于行内元素，可以使用以下方法来实现垂直居中
    - 设置行内元素的父容器的 line-height 属性等于容器的高度，这将使文本在容器中垂直居中。例如：
    ```
    .container {
        height: 100px; /* 假设容器高度为 100px */
        line-height: 100px; /* 将行高设置为容器 */
    }
    ```
    - 使用vertical-align属性
        - 用于指定元素在垂直方向上的对齐方式
    ```
    .centered-element {
        vertical-align: middle;
    }
    ```
