// 实例化Promise对象，成功是resolve，失败是reject
// 演练1
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let data = "数据库中的数据";
    resolve(data);
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
