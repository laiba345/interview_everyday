Less & Sass
- LESS和Sass（Syntactically Awesome Style Sheets）都是**CSS预处理器**

- 相同点
    - 都**可以用来定义样式**，例如字体、颜色、布局等等。它们也都支持选择器、属性和值的语法。

- 不同点
    - **语法**：LESS和Sass在语法方面存在一些差异。Sass使用缩进来表示**嵌套**，而LESS使用花括号表示嵌套。此外，Sass还支持通过&符号来表示父元素。

    - **变量**：LESS和Sass都支持变量，但它们的语法略有不同。在LESS中，变量以@符号开头，例如@color: #ffffff；而**在Sass中，变量以$符号开头，例如$color: #ffffff**。

    - **函数和Mixin**：LESS和Sass都支持函数和Mixin，但它们的语法略有不同。在LESS中，Mixin以.开头，例如.box-shadow()；而在Sass中，Mixin以@mixin开头，例如@mixin box-shadow()。

    - **扩展**：Sass支持通过@extend关键字来扩展现有样式，而LESS不支持这个功能。

    - **文件后缀**：LESS的文件后缀为.less，而Sass的文件后缀为.scss或.sass，取决于使用的语法风格。


