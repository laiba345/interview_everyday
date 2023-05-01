Vue中组件间的通信方式；https://juejin.cn/post/7110223595359436813
- 父子组件通信
    - 父 => 子；通过props
    - 子 => 父；通过$emit触发事件
    - 通过父链/子链也可以通信($parent/$children)
        - 使用$parent和$children可以访问到组件实例的父组件和子组件
    - ref也可以**访问组件实例**
    - 父 => 子/孙；provide/inject
    - $attrs/$listeners
- 兄弟组件通信
    - 全局事件总线$eventBus;
    - Vuex;
- 跨层级组件间通信
    - 全局事件总线eventBus
    - Vuex
    - provide/inject
    
