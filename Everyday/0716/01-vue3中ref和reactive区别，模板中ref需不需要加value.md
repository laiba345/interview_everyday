vue3中ref和reactive区别，模板中ref需不需要加value
1. ref和reactive是用于创建响应式数据的两种不同的方式
2. 具体介绍
- ref函数
    - ref是一个函数，用于创建一个包装过的响应式对象。
    - 其接受一个参数作为初始值，并返回一个包含value属性的**响应式对象**
    - 在模板中使用ref时，需要通过.valuel来访问包装的值
```
import { ref } from 'vue';

const count = ref(0);
console.log(count.value); // 输出: 0
count.value++; // 增加值
console.log(count.value); // 输出: 1
```
- reactive函数
    - 用于创建一个包含多个属性的响应式对象
    - 其接受一个普通对象，并返回一个代理对象，使得对象的属性可以响应式地追踪变化
    - 在模板中使用reactive时，可以直接访问对象的属性
```
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'John'
});
console.log(state.count); // 输出: 0
state.count++; // 增加值
console.log(state.count); // 输出: 1
```

- 总结
    - 使用 ref 创建的是包装过的响应式对象，需要通过 .value 访问值。
    - 使用 reactive 创建的是一个代理对象，可以直接访问对象的属性。

- Vue3中的模板语法中，不需要在ref的使用中加上.value属性