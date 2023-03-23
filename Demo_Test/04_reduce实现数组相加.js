const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 输出15

/* 
    解释
    - 在上面的代码中，reduce方法接受两个参数：一个回调函数和一个初始值。
    - 回调函数接受两个参数，
        - 第一个参数是累计值(即之前的计算结果)，
        - 第二个参数是当前元素的值。
    在回调函数中将当前元素的值加到累计值上，并返回这个新的累计值。最后输出累计值即可得到求和结果。




*/
