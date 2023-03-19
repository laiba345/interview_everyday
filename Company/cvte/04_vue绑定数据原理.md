vue2
- vue2双向绑定原理
    - vue 通过使用双向数据绑定，来实现了 View 和 Model 的同步更新
    - vue 的双向数据绑定主要是通过使用数据劫持和发布订阅者模式来实现的
    - 通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调
        - 缺点
            - 检测不到对象属性的添加和删除
            - 数组API方法无法监听到
            - 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题

vue3 
- vue3双向绑定原理
    - 通过Proxy来针对一个对象进行监听，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性了

- 区别总结
    - Object.defineProperty只能遍历对象属性进行劫持
    - Proxy直接可以劫持整个对象，并返回一个新对象，我们可以只操作新的对象达到响应式目的
    - Proxy可以直接监听数组的变化（push、shift、splice）
    - Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等，这是Object.defineProperty不具备的
    - 正因为defineProperty自身的缺陷，导致Vue2在实现响应式过程需要实现其他的方法辅助（如重写数组方法、增加额外set、delete方法）