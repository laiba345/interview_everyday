async function fn1() {
    return 100 // 相当于return Promise.resolve(100)
}

const res1 = fn1() // 执行async
console.log('res1', res1) // res1 Promise { 100 } 是一个Promise对象

res1.then( data => {
    console.log('data', data) // 100
})

!(async function() {
    const p1 = Promise.resolve(300)
    const data1 = await p1 // await相当于 Promise.then 
    console.log('data1', data1) 
})()

!(async function() {
    const data1 = await 400 // await Promise.resolve(400)
    console.log('data1', data1) 
})()