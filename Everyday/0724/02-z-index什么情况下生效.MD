z-index在什么情况下生效？
- z-index是一个CSS属性，用于控制元素在**垂直堆叠顺序**中的显示位置
- 其通常用于定位或覆盖元素的层叠顺序，使得某个元素可以在其他元素之上或之下显示

z-index仅在以下情况生效
1. 定位元素
    - z-index 属性只对定位（positioned）元素生效，即那些使用position属性值为 relative、absolute、fixed 或 sticky 的元素。
2. 层叠上下文
    - z-index 属性只在创建了层叠上下文（stacking context）的元素中生效。层叠上下文是一种视觉上下文，其中元素按照一定的规则进行堆叠。某些属性或属性值，如opacity、transform、filter、mix-blend-mode 等，会触发层叠上下文。
3. 元素之间有重叠
    - z-index属性只在元素有重叠的情况下会生
        - 参考实习期间的模版页面的设计