display: none 和 visibility: hidden 两者的区别
- **display: none 隐藏后不占用文档流；而 visibility: hidden 会占用文档流。**
- visibility 具有**继承性**，给父元素设置 "visibility: hidden"，子元素也会继承该属性，但如果重新给子元素设置 "visibility: visible"，则子元素又会显示出来。
- visibility: hidden 不会影响计数器的计数，虽然隐藏了，但计数器依然运行着。
在 css3 中 transition 支持 visibility 属性，但不支持 display。因为 - transition 可以延迟执行，因此配合 visibility 使用纯 css 延时显示效果可以提高用户体验。
- **display: none 会引起回流（重排）和重绘；visibility: hidden 会引起重绘**。
