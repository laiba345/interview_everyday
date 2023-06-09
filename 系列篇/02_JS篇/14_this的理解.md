this的理解
- 概念
    - this是JS中的一个关键字
    - 它是函数运行时，自动生成的一个内部对象，只能在函数内部使用，随着函数使用场合的不同，this的值会发生变化
    - 但是有一个**总的原则**：this指的是调用函数的那个对象
- this的指向
    - ① 作为普通函数执行时，this指向window，但在严格模式下this指向undefined。
    - ② 函数作为对象里的方法被调用时，this指向该对象.
    - ③ 当用new运算符调用构造函数时，this指向返回的这个对象。
    - ④ 箭头函数的this绑定看的是this所在函数定义在哪个对象下，就绑定哪个对象。如果存在嵌套，则this绑定到最近的一层对象上。
    - ⑤ call()、apply()、bind()是函数的三个方法，都可以显示的指定调用函数的this指向。

