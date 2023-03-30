/* 
    手写Promise
    - 初始化 & 异步调用
    - then catch 链式调用
    - API：.resolve、.reject、.all、.race
*/
class MyPromise {
  state = "pending"; // 状态： pending、fulfilled、rejected
  value = undefined; // 成功的值
  reason = undefined; // 失败后的原因

  resolveCallbacks = [] // pending状态下，存储成功的回调
  rejectCallbacks = [] // pending状态下，存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };
    const rejectHandler = (reason) => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.reason = reason;
      }
    };
    try {
      fn(resolveHandler, rejectHandler);
    } catch (err) {
      rejectHandler(err);
    }
  }
  then(fn1, fn2) {

  }
}
