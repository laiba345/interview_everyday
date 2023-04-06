script标签中属性async和defer的区别
- **script**: 会阻碍HTML解析；只有下载好并执行完脚本才会继续解析HTML
- **async script**: 解析 HTML 的过程中会进行脚本的异步下载，下载成功后立马执行，因此有可能会阻断 HTML 的解析。多个脚本的执行顺序无法保证。
- **defer script**: 也是异步下载脚步，加载完成后，如果此时 HTML 还没有解析完，浏览器不会暂停解析去执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，如果存在多个 defer script 标签，浏览器（IE9及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。