style 标签写在 body 后与 body 前有什么区别？
- 写在 body 标签前**有利于浏览器逐步渲染**：
resources downloading --> cssDOM + DOM --> Render Tree --> layout --> paint
- 写在 body 标签后：由于浏览器以逐行方式对 HTML 文档进行解析，**当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染**，等待加载且解析样式完成后重新渲染；在 windows 的 IE 下可能出现样式失效导致的页面闪烁问题。
