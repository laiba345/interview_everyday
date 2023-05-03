/* 
    发送一个请求，如何在30s后自动rejected，
    用Promise.race怎么实现
*/
/*
    Promise.race()是什么，如何使用
    - 其是Promise构造函数的一个静态方法，用于将多个Promise实例
    包装成一个新的Promise实例。
    - 作用
        - 多个Promise实例竞争，返回最先完成的Promise实例的结果或者错误信息
        - 当多个Promise实例中有一个实例状态变为fulfilled或rejected
        - Promise.race() 就会返回该实例的结果或错误信息，不管其他实例的状态如何
*/

/* 
    实现步骤
    1、定义一个Promise对象，并在Promise对象中发送请求，返回一个Promise实例
    2、使用setTimeout方法设置一个计时器，30秒后自动执行reject方法
    3、使用Promise.race() 方法将上面两个Promise实例传入，并返回一个新的Promise实例
    4、在Promise.race()方法的then方法中处理Promise实例的结果，并进行相关操作
*/
const requestPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 模拟请求失败
    reject(new Error("Request timed out"));
  }, 3000);
});

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Timeout after 30 seconds"));
  }, 3000);
});

Promise.race([requestPromise, timeoutPromise])
  .then((result) => {
    // 处理Promise实例的结果
    console.log(result);
  })
  .catch((error) => {
    // 处理Promise实例的错误信息
    console.log(error);
  });
