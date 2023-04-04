/* 
    知识点
    - XMLHttpRequest
    - 状态码
        - 2xx：表示成功处理请求，如200
        - 3xx：需要重定向，浏览器直接跳转，如301、302
        - 4xx：客户端请求错误；如404
        - 5xx：服务器端错误
    - 跨域：同源策略；跨域解决方案
*/
// get请求
const xhr = new XMLHttpRequest()
// xhr.open("GET", "/api", true) // true才表示异步
xhr.open('POST', '/api', false)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            alert(xhr.responseText)
        }
    }
}
// xhr.send(null) // 因为是get请求，发送null即可
const postData = {
    userName: 'zhangsan', 
    password:'xxx'
}
xhr.send(JSON.stringify(postData))