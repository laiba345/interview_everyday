CSS选择器优先级(从高到低)
1. !important 
2. 内联样式; 通过style属性直接定义在元素标签上的样式
3. ID选择器  100
4. 类选择器、属性选择器、伪类选择器 10 
- 属性选择器的使用
```
html
<div data-attribute="example">This is an example.</div>
<div data-attribute="another">Another element.</div>
css
[data-attribute="example"] {
  /* CSS样式 */
}
```
5. 元素选择器 1
6. 通用选择器和子选择器：包括*和>等，优先级较低。
7. 兄弟选择器和相邻选择器：如~和+，优先级较低。
