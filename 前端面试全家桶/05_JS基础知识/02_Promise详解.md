then和catch改变状态（只要是正常返回的话，都是返回resolved）
- then正常返回resolved，里面有报错则返回rejected
    - resolved触发后续then回调
- catch正常返回resolved，里面有报错则返回rejected
    - rejected触发后续catch回调

Promise总结
- 三种状态，状态的表现和变化
- then和catch对状态的影响（重要）
- then和catch的链式调用（常考）
