说一下bind, call, apply的区别
1. bind方法会**创建一个新的函数**,并将其绑定到指定对象
2. call方法; 允许你指定上下文中调用函数,并传递一个或多个参数
    - 第一个参数是: 要绑定到函数的对象
    - 后续的参数是: 要传递给函数的参数
3. apply方法; 与call方法类似,不同之处在于传递的参数的方式不同
    - 其也是接收一个对象作为上下文,以及一个参数数组(类数组对象)