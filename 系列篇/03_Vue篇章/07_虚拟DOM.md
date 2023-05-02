虚拟DOM
- 它是JavaScript框架或库中的**一种优化技术**；以**避免频繁更新实际DOM。**
- **好处**
    - 性能提升
        - **直接操作DOM是有限制的**，一个真实元素上有很多属性，如果直接对其进行操作，同时会对很多额外的属性内容进行了操作，这是没有必要的
        - 另外，操作DOM的代价是比较昂贵的，**频繁的操作DOM**容易引起页面的重绘和回流。**如果通过抽象VNode进行中间处理，可以有效减少直接操作DOM次数，从而减少页面的重绘和回流**
    - 方便跨平台实现
        - 同一VNode节点可以渲染成不同平台上对应的内容；如：渲染在浏览器是DOM元素节点，渲染在IOS变为对应的控件；Vue3允许开发者基于VNode实现自定义渲染器(renderer)，以便于针对不同平台进行渲染
- 结构
    - 没有统一的标准；一般包括**tag、props、children**三项
        - tag：必须。就是标签，也可以是组件或者函数
            - **表示该节点的 HTML 标签名**，比如 div、span、p 等。
        - props：非必选。就是这个标签上的属性和方法
            - **表示该节点的 HTML 属性**，比如 class、id、style 等。
        - children：非必选。就是这个标签的内容或者子节点
            - **表示该节点的子节点**，可以是其他虚拟 DOM 节点，也可以是文本节点。
    - 虚拟DOM树示例；
    ```
    {
      tag: 'div',
      props: {
        class: 'container',
        id: 'app'
      },
      children: [
        {
          tag: 'h1',
          props: {
            class: 'title'
          },
          text: 'Hello World!'
        },
        {
          tag: 'p',
          props: {
            class: 'content'
          },
          text: 'This is a paragraph.'
        }
      ]
    }
   ```
