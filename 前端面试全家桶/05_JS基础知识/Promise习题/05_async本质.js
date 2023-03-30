async function async1() {
    console.log('async start') // 2
    await async2() // undefined
    /* 
        await的后面，都可以看作是callback里的内容，即异步
        类似：event loop； setTimeout(cb1)
        异步：
            - setTimeout(function(){})
            - Promise.resolve().then() 
    */
    console.log('async1 end') // 5
}

async function async2() {
    console.log('async2') // 3
}

console.log('script start') // 1
async1()
console.log('script end') // 4
// 同步执行完；（eventLoop）