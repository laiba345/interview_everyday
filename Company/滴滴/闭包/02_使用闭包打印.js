/* 
    使用闭包实现每隔一秒打印 1,2,3,4
*/
// 方法一
// for(var i = 0; i < 5; i++) {
//     (function(i){
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     })(i)
// }

// 方法二
// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }