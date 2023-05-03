/* 
    fetch的基本使用
    - 
*/
// 1、发送Get请求
fetch(url).then(response => {
    // 处理响应
}).catch(error => {
    // 处理错误
})

// fetch(url).then(response => {
//     // 处理响应
// }).catch((error) => {
//     // 处理错误
// }) 

// 2、发送Post请求；发送Post请求的话，需要使用fetch()方法的第二个参数
fetch(url, {
    method: 'POST',  // 设置请求方法
    body: JSON.stringify(data),  // 指定请求体
    headers:{ // 指定请求头
        'Content-Type': 'application/json'
    }
}).then(response => {
    // 处理响应
}).catch(error => {
    // 处理错误
})

/* 
    注意点：
    fetch()方法，不会自动将请求的数据转换为JSON格式，
    如果需要发送JSON数据，需要手动将数据转换为JSON格式
    请求头需要设置为；'application.json'
*/
