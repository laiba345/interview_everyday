Null & undefined
1. undefined
- 当一个变量声明了但未被赋值时，默认的初始值是undefined

2. null
- null表示一个空值或者无效值，表示变量被赋值为一个空引用或空对象

区别
1. 值
- undefined是表示变量未定义或者缺少值，而null表示变量有一个空值或者无效值。
2. 类型
- typeof操作符对于null返回"object"，而对于undefined返回"undefined"。
3. 使用场景
- undefined通常是在变量声明后但未赋值时的默认值，也可以用来检查函数是否有返回值。null通常用来表示一个空对象或者清空对象引用。