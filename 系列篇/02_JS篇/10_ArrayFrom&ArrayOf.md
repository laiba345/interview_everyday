Array.from() 和 Array.of() 的使用及区别
- Array.from()
    - 将伪数组对象或可遍历对象转换为真数组。接受三个参数：input、map、context。
        - input：待转换的伪数组对象或可遍历对象；
        - map：类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组；
        - context：绑定map中用到的 this。
- Array.of()
    - **将一系列值转换成数组，会创建一个包含所有传入参数的数组，而不管参数的数量与类型**，解决了new Array()行为不统一的问题。