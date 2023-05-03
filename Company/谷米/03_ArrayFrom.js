let arr = Array.from([1, 2, 3], (x) => x * 2);
console.log(arr); // [ 2, 4, 6 ]

// 下方的Array.from() 表示生成一个数组，其中该数组的长度为10，
// 后面的i是从0-9开始计算的；这一点很关键；
let arr2 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(arr2);

/* 
    注意点
    - 函数参数列表中的 _ ;表示一个占位符没有别的意思
*/
// 因为前面设定{length: 10}，后面中的i是从0开始计数的
// Array.from({ length: 10 }, (_, i) =>
//   fetch(`/api/order/${i + 1}`).then((res) => res.json())
// );

let arr3 = Array.from({length: 10})
console.log(arr3) // 全是undefined，反正最后的结局是返回一个数组[]
