数组添加一个数字，Vue怎么知道数组变化了
1. Vue会通过其**内置的响应式系统**自动检测到数组的变化。这样
当你向数组中添加元素时，Vue会自动更新视图以反映这些变化

2. 具体步骤
- Vue组件中，通过data属性来定义数组
- Vue组件的方法或生命周期钩子中，当你向数组中添加新元素时，确保使用Vue的数组变更方法
常用的方法包括：push、pop、shift、unshift、splice、Vue.set() 等
- Vue的响应式系统会自动检测到数组的变化，并相应地更新视图，以反映模板中使用该数组的地方的变化
    - Vue的响应式系统自动检测数组的变化，并相应的更新视图

    
