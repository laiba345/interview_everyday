async function asyncFunction1() {
    await someAsyncOperation() // 第一个async函数的相关逻辑
    console.log('async function 1 Done');
}

async function asyncFunction2() {
    await someAsyncOperation()
    console.log('async function 2 Done');
}

// 使用Promise.all来同时执行两个async函数
Promise.all([asyncFunction1(), asyncFunction2()]).then(() => {
    console.log('Both Async Function completed');
}) 

