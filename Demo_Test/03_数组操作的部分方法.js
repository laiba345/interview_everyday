/* 
    join
*/
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let str1 = arr1.join();
console.log(arr1);
console.log(arr1.length); // 7
console.log(str1);

/* 
    按照数组对象中的某个值排序
*/
let arr2 = [
  { name: "1", age: "18" },
  { name: "2", age: "19" },
  { name: "3", age: "10" },
];
function compare(params) {
  return function sortAge(a, b) {
    return a[params] - b[params];
  };
}

arr2.sort(compare("age"));
console.log(arr2)
// 结果
// ({ name: "3", age: "10" }, { name: "1", age: "18" }, { name: "2", age: "19" })];

let arr3 = [1, 2, 3, 4, 5]
let newArr3 = arr3.filter(x => x > 3)
console.log(newArr3) // [4, 5]
