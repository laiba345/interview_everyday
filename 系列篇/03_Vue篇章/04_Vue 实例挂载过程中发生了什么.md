Vue 实例挂载过程中发生了什么？
- 初始化阶段：**创建 Vue 实例**

- 模板编译阶段：**将模板编译成渲染函数**，并将其挂载到 Vue 实例的 `$options.render` 属性上。

- 挂载阶段：将 Vue 实例挂载到 DOM 元素中。

- 渲染阶段：**将虚拟 DOM 树转换成真实 DOM 并插入到页面中，完成组件的渲染**。
    - DOM操作

- 更新阶段：**当响应式数据发生变化时**，Vue 会重新生成虚拟 DOM 树，并通过 diff 算法比较新旧虚拟 DOM 树的差异，并将差异更新到真实 DOM 中

- 销毁阶段：**当 Vue 实例被销毁时，会触发销毁阶段**。在这个阶段，Vue 会调用生命周期钩子函数 beforeDestroy、destroyed，并执行一些必要的清理工作，如解绑事件、清除定时器等。

