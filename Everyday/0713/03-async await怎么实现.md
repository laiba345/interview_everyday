async await怎么实现?
1. 在JS中,async和await是**一对用于处理异步操作的关键字**
    - async用于声明一个函数是异步函数
    - await用于等待一个异步操作完成
2. async和await的使用
    -  async 关键字声明一个函数为异步函数。异步函数会返回一个 Promise 对象。
    - 在异步函数内部,可以使用await关键字来等待一个返回Promise的异步操作完成

···
async function myAsyncFunction() {
  const result = await myAsyncOperation();
  // 使用 result
}
···
3. 在异步函数中,可以使用try/catch块来捕获异步操作可能抛出的错误