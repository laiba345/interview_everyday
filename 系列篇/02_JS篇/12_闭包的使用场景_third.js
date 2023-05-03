/* 
  3、实现函数柯里化
  - 函数柯里化是指将一个多参数的函数转换成一系列单参数的函数的过程
  - 使用闭包来实现函数柯里化
*/
function add(x, y) {
  return x + y;
}

function curry(func) {
  return function (x) {
    return function (y) {
      return func(x, y);
    };
  };
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)) // 5

/* 
  curry函数接受一个函数作为一个参数，并返回一个新的函数
  新函数接收一个参数'x',并返回一个闭包函数，该闭包函数接受另一个参数'y',
  并调用原始函数func来计算结果，
  - 通过使用闭包来捕获'x'和 'func'，从而实现函数柯里化的功能
*/
