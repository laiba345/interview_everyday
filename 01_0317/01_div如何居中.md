对于宽高固定的元素
- （1）我们可以利用 **margin:0 auto** 来实现元素的水平居中。
- （2）利用绝对定位，**先将元素的左上角通过top:50%和left:50%定位到页面的中心**，然后再通过**margin负值**来调整元素的中心点到页面的中心。
- （3）利用绝对定位，**先将元素的左上角通过top:50%和left:50%定位到页面的中心**，然后再通过**translate**来调整元素的中心点到页面的中心。
- （4）**使用flex布局**，通过**align-items:center**和**justify-content:center**设置容器的垂直和水平方向上为居中对
齐，然后它的子元素也可以实现垂直和水平的居中。

对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

