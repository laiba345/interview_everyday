Vue路由传参
1. 动态路由参数
    - 我们可以声明一个带有动态路由参数的路由
    ```
    {
        path: '/user/:id',
        name: 'User',
        component: User
    }
    ```
    - 然后在组件中使用$route.params对象来访问路由参数
    ```
    <template>
        <div>{{ $route.params.id }}</div>
    </template>
    ```
2. Query参数
    - 另一种方式是使用query参数；例如，我们可以声明一个带有query参数的路由
    ```
    {
        path: '/user',
        name: 'User',
        component: User
    }
    ```
    - 然后在组件中使用$route.query对象来访问query参数
    ```
    <template>
        <div>{{ $route.query.id }}</div>
    </template>
    ```
3. **也可以在代码中使用编程式导航来传递参数**。例如，我们可以使用 $router.push() 方法来跳转到另一个路由，并同时传递参数：
- 编程式路由导航；用push方法来传递；
```
this.$router.push({ path: '/user', query: { id: 123 }})
```