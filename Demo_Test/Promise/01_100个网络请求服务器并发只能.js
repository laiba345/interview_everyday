/* 
    100个网络请求，但是服务器一次只能并发6个，怎么处理？
    结合promise API 写代码
*/
/* 
    如果需要对100个网络请求进行并发控制，可以使用Promise.all()来实现
    使用Promise.all()可以同时发起多个网络请求，当所有请求都完成后，
    Promise.all()返回一个Promise对象，其状态变为fulfilled，并将
    所有请求的结果作为数组返回

    同时可以将所有的Promise对象放入一个数组中，并使用Array.slice()方法
    将其分为长度为6的多个子数组，
    然后使用Promise.all()对每个子数组中的Promise对象进行并发控制
*/
const urls = ['url1', 'url2', 'url3', ... 'url100']
const maxConcurrency = 6

// 将所有的Promise对象分成长度为6的多个子数组
const chunks = urls.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/maxConcurrency)
    if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item) // 
    return resultArray // 最开始的结果是[]
}, [])

// 将每个子数组中的Promise对象进行并发控制
const promises = chunks.map(chunk => {
    return Promise.all(chunk.map(url => fetch(url)))
})

// 使用Promise.all()等待所有的并发请求完成
Promise.all(promises.flat()).then(results => {
    // 所有网络请求完成，可以处理结果
    console.log(results)
}).catch(error => {
    // 处理异常情况
    console.log(error)
})


