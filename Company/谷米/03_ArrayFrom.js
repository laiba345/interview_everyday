let arr = Array.from([1, 2, 3], (x) => x * 2);
console.log(arr); // [ 2, 4, 6 ]

let arr2 = Array.from({ length: 10 }, (_, i) => i * i);
console.log(arr2);

// 因为前面设定{length: 10}，后面中的i是从0开始计数的
Array.from({ length: 10 }, (_, i) =>
  fetch(`/api/order/${i + 1}`).then((res) => res.json())
);
