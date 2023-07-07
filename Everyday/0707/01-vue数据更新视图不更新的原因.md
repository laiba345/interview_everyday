vue数据更新视图不更新的原因？
1. 错误的响应式声明
    - 确保使用的是data选项来声明数据属性
    - 或者在Vue组件中使用computed属性来派生数据
2. 直接修改数组索引或对象属性
    - Vue可以检测到通过数组方法(push、pop、splice等)
    - 或对象属性访问器对数组或对象进行的更改
        - 直接修改数组索引，导致视图不更新
        ```
        // 错误示例
        this.items[0] = newValue;
        // 正确示例
        this.items.splice(0, 1, newValue);
        ```
        - 直接修改对象属性导致视图不更新
        ```
        // 错误示例
        this.user.name = newName;

        // 正确示例
        this.user = Object.assign({}, this.user, { name: newName });
        // 或使用Vue.set方法：Vue.set(this.user, 'name', newName);
        ```
        - **上述中，最好使用Vue.set() 或者 数组的splice() 方法进行更新操作
3. 异步更新问题
    - 如果数据的变化是在**异步操作中进行的**，例如在异步回调或Promise的处理函数中更新数据，**Vue可能无法立即捕捉到数据的变化**。
    - 这种情况下，需要使用Vue提供的异步更新机制来通知Vue进行更新，可以使用$nextTick方法或将数据更新放在Vue.nextTick的回调函数中。
    ```
    // 错误示例
    setTimeout(() => {
        this.message = 'Updated'; // 视图可能不会立即更新
    }, 1000);

    // 正确示例
    setTimeout(() => {
        this.$nextTick(() => {
            this.message = 'Updated'; // 视图会在下一次DOM更新循环时更新
        });
    }, 1000);
    ```