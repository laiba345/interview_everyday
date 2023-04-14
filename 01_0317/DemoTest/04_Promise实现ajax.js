// 通过promise来实现相关内容
const p2 = new Promise((resolve, reject) => {
  // 1、创建对象
  // 这个是浏览器对象
  // 在node环境下没有办法运行
  const xhr = new XMLHttpRequest();
  // 2、初始化
  xhr.open("GET", "http://api.apiopen.top/getJoke");
  // 3、发送
  xhr.send();
  // 4、绑定事件，处理响应结果
  xhr.onreadystatechange = function () {
    // 判断
    if (xhr.readyState === 4) {
      // 判断响应码是不是在200 ～ 3000之间
      if (xhr.status >= 200 && xhr.status < 300) {
        // 在这个状态码之间表示成功
        resolve(xhr.response);
      } else {
        reject(xhr.status); // 调用状态码
      }
    }
  };
});

// 指定相应的回调
p2.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.log(reason);
  }
);
