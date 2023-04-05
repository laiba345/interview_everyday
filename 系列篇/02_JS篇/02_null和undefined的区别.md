null和undefined的区别
- null
    - null表示**一个对象被定义了，值为“空值”**
    - 用法：① 作为函数的参数，表示该函数的参数不是对象。② 作为对象原型链的终点。
- undefined
    - undefined表示**不存在这个值；就是此处应该有一个值，但是还没有定义**
    - 当尝试读取时就回返回undefined
    - 用法：① 函数没有返回值时，默认返回 undefined。② 变量已声明，没有赋值时，为 undefined。③ 对象中没有赋值的属性，该属性的值为 undefined。④ 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
