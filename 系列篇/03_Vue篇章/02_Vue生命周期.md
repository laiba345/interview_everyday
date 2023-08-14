Vue的生命周期
- 用来在组件不同阶段执行特定的操作，从而实现对组件的精细控制；
- Vue 的生命周期可以分为8个阶段 Vue2
    - `创建前后`（beforeCreate、created）
    - `挂载前后`（beforeMount、mounted）
    - `更新前后`（beforeUpdate、updated）
    - `销毁前后`（beforeDestroy、destroyed)
    - **以及一些特殊场景的生命周期**
        - activated；keep-alive组件激活时调用
        - deactivated；keep-alive组件停用时调用

- Vue3
    - setup函数代替了beforeCreate、created
    - 挂载前后；onBeforeMount、onMounted
    - 更新前后；onBeforeUpdate、onUpdated
    - 卸载前后；onBeforeUnmount、onUnmounted
- 新增的钩子
    - onRenderTracked； 用于追踪组件渲染时的依赖追踪情况
    - onRenderTriggered； 用于追踪组件渲染时的依赖触发情况
