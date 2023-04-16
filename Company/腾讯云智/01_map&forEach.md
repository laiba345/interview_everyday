map和forEach的区别
- 返回值
    - **map方法会返回一个新的数组**，而**foreach方法没有返回值**
- 使用方式
    - **map方法**通常用于对原数组进行修改或转换，并返回新的数组，
    - **foreach方法**主要用于对数组进行遍历并执行一些操作，不会对原数组进行修改。
- 举例：
    - 如果我们有一个数组，想要将其中的每个元素都乘以2，可以使用map方法：
    ```
    const arr = [1, 2, 3, 4];
    const newArr = arr.map(item => item * 2);
    console.log(newArr); // [2, 4, 6, 8]
    console.log(arr); // [1, 2, 3, 4]
    ```
    - 如果我们想要对数组中的每个元素进行一些操作，比如打印出来，可以使用foreach方法：
    ```
    const arr = [1, 2, 3, 4];
    arr.forEach(item => console.log(item));
    ```

