ECharts的使用
1. 下载ECharts；
    - 从 ECharts 官网下载最新版本的 ECharts。
    - echarts.min.js
2. 导入ECharts；
    - 将 ECharts 的 JavaScript 文件引入 HTML 页面中：
    ```
    <script src="echarts.min.js"></script>
    ```
3. 创建容器元素
    - 在 HTML 页面中创建一个容器元素，用于放置图表：
    ```
    <div id="myChart" style="width: 600px; height: 400px;"></div>
    ```
4. 初始化图表对象
    - 在 JavaScript 中，使用 **echarts.init** 方法创建一个 ECharts 实例，并给它指定容器元素：
    ```
    var myChart = echarts.init(document.getElementById('myChart'));
    ```
5. 配置图表
    - 通过 **setOption**方法配置图表参数，包括图表类型、数据、样式等：
    ```
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 5]
        }]
    });
    ```
6. 渲染图标
    - 调用 myChart 对象的 render 方法渲染图表：
    ```
    myChart.render()
    ```



