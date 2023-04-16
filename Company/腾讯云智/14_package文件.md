package.json文件 和 package-lock.json文件的用途
- 在 Vue 项目中，package.json 和 package-lock.json 文件**都是用来存储项目的依赖信息的。**它们的作用如下：
    - package.json：该文件是**一个 JSON 格式的文本文件**，用于**记录项目所需的依赖包和其版本号等信息**。在执行 npm install 命令时，npm 会根据这个文件下载所有需要的依赖包。同时，也可以在该文件中添加自定义的 npm 命令，例如启动开发服务器、打包代码等。
    - package-lock.json：该文件是 npm 5 及以上版本新增的锁定文件，用于记录当前使用的依赖包版本号及其依赖关系。**当执行 npm install 命令时，npm 会首先检查该文件，如果存在且与 package.json 中的依赖信息不一致，则会优先使用 package-lock.json 中的依赖信息，确保项目依赖包的版本稳定不变。**
        - 存在与package.json中的依赖信息不一致，则会优先使用package-lock.json中的依赖信息，确保项目依赖包的版本稳定不变
