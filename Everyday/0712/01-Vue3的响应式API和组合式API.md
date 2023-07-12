Vue3的组合式API和响应式API
1. 组合式API是Vue3的一种新的组件组织方式，它使得组件的逻辑更加清晰和可维护；
**它通过使用setup函数来定义组件的逻辑部分，这个函数在组件创建过程中被调用**。setup函数可以返回一个对象，其中包含了组件的状态、计算属性、方法等。

2. 响应式API是Vue3中用于创建响应式数据的新方式， 它使用ref和reactive函数来创建响应式数据
    - **ref函数用于创建一个包装器，将普通的JavaScript数据变成响应式数据**。它接收一个参数作为初始值，并返回一个包含value属性的对象。我们可以通过读取和修改value属性来访问和更新这个响应式数据。
    - **reactive函数用于创建一个包含多个属性的响应式对象**。它接收一个普通的JavaScript对象，并返回一个代理对象。我们可以直接读取和修改代理对象的属性，这些属性的变化将被Vue追踪并进行响应。

3. 在组合式API中，我们可以在setup函数中使用ref和reactive函数创建响应式数据
例如：
```
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0); // 创建响应式数据
    const state = reactive({
      name: 'John',
      age: 25
    });

    function increment() {
      count.value++;
    }

    return {
      count,
      state,
      increment
    };
  }
};
```