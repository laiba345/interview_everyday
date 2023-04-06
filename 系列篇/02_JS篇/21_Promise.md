Promise
- Promise是异步编程的一种解决方案
- Promise是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。
- 一个 Promise 实例**有三种状态**，分别是pending、fulfilled和rejected，分别代表了进行中、已成功和已失败。
- 实例的状态只能由 pending 转变 fulfilled 或者 rejected 状态，并且状态一经改变，就无法再改变了。
- 状态的改变是通过resolve()和reject()函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态。**Promise 的原型上定义了一个 then方法，使用这个 then 方法可以为两个状态的改变注册回调函数**。这个回调函数属于微任务，会在本轮事件循环的末尾执行