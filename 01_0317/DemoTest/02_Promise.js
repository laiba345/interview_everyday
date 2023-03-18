// 实例化Promise对象，成功是resolve，失败是reject
// 演练1
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let data = "数据库中的数据";
    resolve(data);
    // let err = "数据读取失败";
    // reject(err);
  }, 1000);
});

// 调用promise对象的then方法
p.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.log(reason);
  }
);

// 演练2
// 发送ajax请求，接口地址：http://api.apiopen.top/getJoke
const p2 = new Promise((resolve, reject) => {
  // 1、创建对象
  const xhr = new XMLHttpRequest();
  // 2、初始化
  xhr.open("GET", "http://api.apiopen.top/getJoke");
  // 3、发送
  xhr.send();
  // 4、绑定事件，处理响应结果
  xhr.onreadystatechange = function () {
    // 判断
    if (xhr.readyState === 4) {
      // 判断响应码是不是200～3000
      if (xhr.status >= 200 && xhr.status < 300) {
        // 表示成功
        resolve(xhr.response);
      } else {
        reject(xhr.status); // 调用状态码
      }
    }
  };
});
// 指定回调
p2.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.log(reason);
  }
);
