Vue中组件间的通信方式
- 父子组件通信
    - 父 => 子；通过props
    - 子 => 父；通过$emit触发事件
    - 通过父链/子链也可以通信($parent/$children)
    - ref也可以访问组件实例
    - 父 => 子/孙；provide/inject
    - $attrs/$listeners
- 兄弟组件通信
    - 全局事件总线$EventBus;
    - Vuex;
- 跨层级组件间通信
    - 全局事件总线EventBus
    - Vuex
    - provide/inject
    