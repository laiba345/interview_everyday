promise中常用的API有哪些？
- Promise.prototype.then()：指定在Promise对象状态变为fulfilled时的回调函数。

- Promise.prototype.catch()：指定在Promise对象状态变为rejected时的回调函数。

- Promise.all(iterable)：接收一个可迭代对象，返回一个新的Promise对象，当所有Promise对象都成功时，则返回所有Promise对象的结果组成的数组；若其中有一个Promise对象失败，则返回失败的Promise对象。

- Promise.race(iterable)：接收一个可迭代对象，返回一个新的Promise对象，只要其中有一个Promise对象状态变化（无论成功或失败），则返回该Promise对象的结果。

- Promise.resolve(value)：返回一个以给定值解析后的Promise对象。

- Promise.reject(reason)：返回一个带有拒绝原因的Promise对象。

- Promise.allSettled(iterable)：接收一个可迭代对象，返回一个新的Promise对象，当所有Promise对象都完成（即fulfilled或rejected）时，则返回包含每个Promise对象状态和值的对象组成的数组。

- Promise.any(iterable)：接收一个可迭代对象，返回一个新的Promise对象，只要其中有一个Promise对象状态变为fulfilled，则返回该Promise对象的值；若所有Promise对象都变为rejected，则返回AggregateError对象，包含每个Promise对象的拒绝原因。




