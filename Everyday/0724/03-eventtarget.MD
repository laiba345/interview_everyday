event.target和event.currentTarget分别表示什么？
- `event.target` 和 `event.currentTarget` 都是 JavaScript 中事件对象（`event`）的属性，用于访问触发事件的元素。
1. `event.target`：
   - `event.target` 属性表示事件的目标元素，即实际触发事件的元素。
   - 在事件的冒泡阶段和捕获阶段，`event.target` 始终保持不变，指向触发事件的元素。
   - 通常情况下，我们可以使用 `event.target` 来获取具体操作的元素，例如在点击事件中获取被点击的按钮或链接的信息。

2. `event.currentTarget`：
   - `event.currentTarget` 属性表示当前正在处理事件的元素，即事件处理程序（事件监听器）所绑定的元素。
   - 在事件的冒泡阶段中，`event.currentTarget` 最初指向注册事件处理程序的元素，然后随着事件向上冒泡，它会逐级指向包含目标元素的父元素。
   - 在事件的捕获阶段中，`event.currentTarget` 与 `event.target` 的值相同，因为此时事件还没有开始冒泡。
   - 通常情况下，我们可以使用 `event.currentTarget` 来访问事件处理程序所绑定的元素，尤其在事件委托（Event Delegation）的场景中，可以利用该属性来获取目标元素的相关信息。

需要注意的是，事件冒泡和事件捕获是两种不同的事件传播机制。事件冒泡是从触发事件的元素开始，逐级向上冒泡到根元素；事件捕获则是从根元素开始，逐级向下捕获到触发事件的元素。在这两个阶段，`event.currentTarget` 的值可能会发生变化。
