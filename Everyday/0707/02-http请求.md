02-http请求
- HTTP请求用于与**服务器进行数据交互**
- 常见的前端HTTP请求方式
1. GET请求;用于从服务器中获取数据
```
axios.get('/api/data')
  .then(response => {
    // 处理响应数据
  })
  .catch(error => {
    // 处理请求错误
  });
```
2. POST请求; 用于向服务器提交数据；
- POST请求通常用于表单提交、发送JSON数据等场景。
```
fetch('/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
.then(response => {
  // 处理响应数据
})
.catch(error => {
  // 处理请求错误
});
```
3. PUT请求; 用于向服务器更新已有资源的全部内容;
```
axios.put('/api/data/123', { name: 'Updated Name' })
  .then(response => {
    // 处理响应数据
  })
  .catch(error => {
    // 处理请求错误
  });
```
4. DELETE请求: 用于从服务器中删除资源
```
fetch('/api/data/123', {
  method: 'DELETE'
})
.then(response => {
  // 处理响应数据
})
.catch(error => {
  // 处理请求错误
});
```