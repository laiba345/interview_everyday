Promise.resolve().then(() => { // 返回 rejected 状态的 promise
    console.log(1)
    throw new Error('erro1')
}).catch(() => { // 返回 resolved 状态的 promise
    console.log(2)
}).then(() => {
    console.log(3)
})
// 结果
// 1
// 2
// 3

// 第一行它肯定会去执行Promise.resolve() 
// 但是里面报错，返回的就是rejected状态的Promise