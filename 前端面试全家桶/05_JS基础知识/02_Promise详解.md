then和catch改变状态（只要是正常返回的话，都是返回resolved）
- then正常返回resolved，里面有报错则返回rejected
    - resolved触发后续then回调
- catch正常返回resolved，里面有报错则返回rejected
    - rejected触发后续catch回调

Promise总结
- 三种状态，状态的表现和变化
    - pending；resolved；rejected
    - pending -> resolved； pending -> rejected
    - 变化不可逆
- then和catch对状态的影响（重要）
- then和catch的链式调用（常考）

知识点
- 初始化Promise时，传入的函数会立刻被执行
- setTimeout虽然里面的时间设置为0；但是它也是一个宏任务；需要放到后面再执行

给定一大串代码；问你执行顺序的话
1. 同步代码执行完毕（event loop - call stack清空）
2. 执行微任务
3. （尝试触发DOM渲染）有的话
4. 触发Event Loop，执行宏任务



