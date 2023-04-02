Vue 中的修饰符有哪些？
- 在Vue中，修饰符处理了许多DOM事件的细节，
- Vue修饰符分为以下几种
    - 表单修饰符
        - **lazy** 填完信息，光标离开标签的时候，才会将值赋予给value，也就是在change事件之后再进行信息同步。
        - **number**：自动将用户输入值转化为数值类型，但如果这个值无法被parseFloat解析，则会返回原来的值。
        - **trim**：自动过滤用户输入的首尾空格，而中间的空格不会被过滤。
    - 事件修饰符
        - stop 阻止了事件冒泡，相当于调用了event.stopPropagation方法。
        - prevent 阻止了事件的默认行为，相当于调用了event.preventDefault方法。
        - self 只当在 event.target 是当前元素自身时触发处理函数。
        - once 绑定了事件以后只能触发一次，第二次就不会触发。
        - capture 使用事件捕获模式，即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理。
        - passive 告诉浏览器你不想阻止事件的默认行为。
        - native 让组件变成像html内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件。
    - 鼠标按键修饰符
        left 左键点击。
        right 右键点击。
        middle 
    - 键值修饰符
        - 键盘修饰符是用来修饰键盘事件（onkeyup，onkeydown）的，有如下：
        - keyCode存在很多，但vue为我们提供了别名，分为以下两种：
            - 普通键（enter、tab、delete、space、esc、up...）
            - 系统修饰键（ctrl、alt、meta、shift...）


