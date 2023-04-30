Vue2和Vue3的区别
1. Vue2和Vue3**双向数据绑定原理**发生了改变
    - vue2的双向数据绑定是利用了**Object.defineproperty()** 对数据进行劫持 结合发布订阅模式来实现的。vue3中使用了**es6的proxyAPI**对数据进行处理
        - 发布与订阅模式是一种组件之间通信的设计模式；该模式允许一个组件充当发布者并向其他组件(订阅者)发送消息，而不需要明确地知道这些订阅者的存在。
        - 任何组件都可以使用$emit方法来触发自定义事件，并使用$on来侦听该事件；
    - 使用proxy API **优势**有：
        - defineProperty()只能监听某个属性，不能对全对象进行监听；
        - 且proxyAPI可以监听数组，不用再去单独的对数组做特异性操作，vue3可以检测到数组内部数据的变化；
        - defineProperty()只能监听属性的改和查；

2. Vue3支持碎片（Fragments）
    - 即**可以拥有多个根节点**

3. Composition API
    - **vue2使用选项类型api，对比vue3组合式api**；
    - **旧的选项型api在代码里分割了不同的属性**：data,computed,methods等；新的组合式api能让我们使用方法来分割，相比于旧的API使用属性来分组，这样代码会更加简便和整洁
   
4. 建立数据data
    - vue2将数据放入data中；**放入进去就已经是响应式数据了；**    
    - **vue3需要使用一个新的setup方法**，此方法在组件初始化构造的时候触发，使用三个步骤来建立响应式数据：1、从vue引入reactive()方法来声明数据为响应式数据 2、使用setup()方法来返回我们的响应式数据 3、从而在template中获取这些响应式数据

5. 生命周期
    ```
      vue2     ------------------     vue3
    beforeCreate                 ->   setup()
    Created                      ->   setup()
    beforeMount                  ->   onBeforeMount
    mounted                      ->   onMounted
    beforeUpdate                 ->   onBeforeUpdate
    updated                      ->   onUpdated
    beforeDestroyed              ->   onBeforeUnmount
    destroyed                    ->   onUnmounted
    activated                    ->   onActivated
    deactivated                  ->   onDeactivated
    ```

6. 父子传参不同，setup函数特性
    - setup() 函数接收两个参数：props、context(attrs、slots、emit)
    - setup函数是处于生命周期beforeCreated和created俩个钩子函数之前
    - 执行setup时，组件实例尚未被创建（在setup()内部，this不会是该活跃实例得引用，即不指向vue实例，Vue为了避免我们错误得使用，直接将setup函数中得this修改成了undefined）
    - 与模板一起使用时，需要返回一个对象
    - 因为setup函数中，props是响应式的，当传入新的prop时，它将会被更新，所以不能使用es6解构，因为它会消除prop得响应性，**如需解构prop，可以通过使用setup函数中得toRefs来完成此操作**
    - 父传子，用props,子传父用事件 Emitting Events。在vue2中，会调用this.$emit然后传入事件名和对象；在vue3中得setup()中得第二个参数content对象中就有emit，那么我们只要在setup()接收第二个参数中使用分解对象法取出emit就可以在setup方法中随意使用了（通过context调用属性方法即可）
    - 在setup()内使用响应式数据时，需要通过 .value 获取（从setup() 中返回得对象上得property 返回并可以在模板中被访问时，它将自动展开为内部值。不需要在模板中追加.value。）
    - setup函数只能是同步的不能是异步的
