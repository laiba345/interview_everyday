/* 
    Promise.all() 的用法
    - Promise.all 是一个 JavaScript 函数，
    - 它接受一个包含多个 Promise 实例的数组作为参数，
    - 并返回一个新的 Promise 对象。
    - 该 Promise 对象在所有的 Promise 实例都已经成功执行后才会被解决，
    - 如果其中任何一个 Promise 实例被拒绝（rejected），
    - 则整个 Promise 将被拒绝。
*/
// 语法
Promise.all(iterable); // 其中iterable是一个可迭代对象，如数组

/* 
    例如，假设你有两个异步函数 promise1() 和 promise2()，它们分别返回 Promise 实例。
    你可以使用 Promise.all 如下组合这两个 Promise 实例：
*/
Promise.all([promise1(), promise2()])
  .then(([result1, result2]) => {
    console.log(`Result 1: ${result1}`);
    console.log(`Result 1: ${result2}`);
  })
  .catch((error) => {
    console.log(error);
  });
