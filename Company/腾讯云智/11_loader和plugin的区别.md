loader和plugin的区别
- 在 Webpack 中，Loader 和 Plugin 是两个不同的概念。

- **Loader 用于转换某些文件**，比如将 ES6 转换成 ES5，或将 SCSS 转换成 CSS 等。当 Webpack 遇到引入的文件符合 Loader 所匹配的文件类型时，会使用 Loader 来处理这个文件。

- **Plugin 则是在 Webpack 运行的各个阶段中执行一些额外的任务**，比如打包优化、资源管理、环境变量注入等。**Plugin 可以在整个 Webpack 构建生命周期完成任何操作，而 Loader 只能在文件加载阶段进行转换操作。**

- 因此，可以简单地理解为：**Loader 是对特定类型的文件进行转换处理，Plugin 则是对整个构建流程进行扩展和自定义。**