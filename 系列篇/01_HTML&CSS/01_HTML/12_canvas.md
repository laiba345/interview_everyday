什么是canvas，基本用法是什么？
- canvas元素是HTML5的一部分，允许脚本语言动态渲染位图像
- canvas 由一个可控制区域 HTML 代码中的属性定义决定高度和宽度。
- JavaScript 代码可以访问该区域，通过一套完整的绘图功能类似于其他通用二维的 API，从而生成动态的图形。
- 基本用法
    - 1、创建canvas标签
    ```
    <canvas id="myCanvas" width="150" height="150">该浏览器不支持canvas</canvas>
    ```
    - 2、渲染上下文
    ```
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ```
    - 解释：代码第一行通过使用 document.getElementById() 方法获取 <canvas> 元素对应的 DOM 对象，然后可以通过使用它的 getContext() 方法来绘制上下文。创建 canvas 标签时可以在标签内写上不支持的提示信息；也可以通过 getContext() 方法判读是否支持编程。
    ```
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // other code
    } else {
        // 不支持 canvas 的其他代码
    }
    ```
- 用途
    - 游戏
    - 图表（echarts.js、heightchart.js都是基于canvas来绘图的）