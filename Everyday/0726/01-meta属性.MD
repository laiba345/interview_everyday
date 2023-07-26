meta属性
1. meta元素用于向浏览器**提供关于网页的元数据**
    - 元数据是描述数据的数据，不直接显示在页面，但是对于浏览器来说非常重要
2. 常见<meta> 属性
- charset: 定义文档中使用的字符编码。<meta charset="UTF-8">
- name: 指定元数据的名称; 
    - description：网页的简短描述。
    - keywords：网页的关键字，用逗号分隔。
    - author：网页的作者。
    - viewport：用于响应式设计，指定页面在不同设备上的视口设置。
- content
    - 定义与名称属性相关的元数据的内容
        - <meta name="description" content="这是网页的描述。">
        - <meta name="keywords" content="关键词1, 关键词2, 关键词3">
        - <meta name="author" content="作者的姓名">
        - <meta name="viewport" content="width=device-width, initial-scale=1.0">
- http-equiv
    - 模拟http头部字段，用于定义一些控制页面行为的属性
    - <meta http-equiv="refresh" content="5;url=https://www.example.com"> // 5秒后跳转到指定网址