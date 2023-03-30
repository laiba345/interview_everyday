async / await
- 异步回调 callback hell
- Promise then catch 链式调用，但也是基于回调函数
- async/await 是同步语法，彻底消失回调函数

async & await 和 Promise的关系
- async/await是消灭异步回调的终极武器(进行同步)
- 但是和Promise并不互斥，反而相辅相成
    - 执行async函数，返回的是Promise对象
    - await相当于Promise的then
    - try...catch  可以捕获异常，代替了Promise的catch

异步的本质
- async/await是消灭异步回调的终极武器
- JS还是单线程；还的是有异步，还得是基于event loop
- async/await只是一颗语法糖；但这颗糖真香
