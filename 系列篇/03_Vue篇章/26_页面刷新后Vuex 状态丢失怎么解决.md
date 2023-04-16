页面刷新后Vuex 状态丢失怎么解决？
- Vuex 只是在内存中保存状态，刷新后就会丢失，如果要持久化就需要保存起来。～ **需要持久化保存；**
    - localStorage就很合适，**提交mutation的时候同时存入localStorage，在store中把值取出来作为state的初始值即可**。
    - 也可以使用第三方插件，推荐使用vuex-persist插件，它是为 Vuex 持久化储存而生的一个插件，不需要你手动存取storage，而是直接将状态保存至 cookie 或者 localStorage中。
