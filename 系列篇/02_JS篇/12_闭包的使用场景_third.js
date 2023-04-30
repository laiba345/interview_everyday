/* 
    3、模块化开发
    - 利用闭包可以实现模块化开发，可以将变量和方法封装在模块中，
    避免全局变量的污染和命名冲突
*/
var module = (function () {
  var privateVar = 0;

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function () {
      privateVar++;
      privateMethod();
    },
  };
})();

module.publicMethod(); // 输出 0
module.publicMethod(); // 输出 1

/* 
    解释
    - 在上述代码中，使用立即执行函数创建了一个模块，其中的私有变量和方法都被封装在模块中。
    - 通过返回一个对象，可以访问模块的公共方法 publicMethod，而无法访问私有变量和方法。
    - 总的来说，闭包可以用于封装变量和方法、延迟执行、模块化开发等场景
*/
