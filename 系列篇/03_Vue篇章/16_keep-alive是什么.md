keep-alive 是什么？
- 概念
    - keep-alive **可以将其包裹的动态组件缓存起来，以避免因多次渲染导致的性能问题。**
- 作用
    - **实现组件缓存**，保持组件的状态，**避免反复渲染导致的性能问题**。
- 工作原理  
    -  Vue.js 内部将 DOM 节点，抽象成了一个个的 VNode 节点，**keep-alive组件的缓存也是基于 VNode 节点的**。它将满足条件的组件在 cache 对象中缓存起来，重新渲染的时候再将 VNode 节点从 cache 对象中取出并渲染。
- 可以设置以下属性
    ① include：字符串或正则，只有名称匹配的组件会被缓存。
    ② exclude：字符串或正则，任何名称匹配的组件都不会被缓存。
    ③ max：数字，最多可以缓存多少组件实例。
    - 匹配首先检查组件的name选项，如果name选项不可用，则匹配它的局部注册名称（父组件 components选项的键值），匿名组件不能被匹配。
- **设置了keep-alive缓存的组件，会多出两个生命周期钩子**：activated、deactivated。
    - 首次进入组件时：beforeCreate --> created --> beforeMount --> mounted --> activated --> beforeUpdate --> updated --> deactivated
    - 再次进入组件时：activated --> beforeUpdate --> updated --> deactivated
