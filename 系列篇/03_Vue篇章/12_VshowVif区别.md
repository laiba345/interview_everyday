v-show和v-if的区别
- **控制手段不同**
    - v-show是通过给元素添加 css 属性display: none，**但元素仍然存在**；而v-if控制元素显示或隐藏是将元素整个添加或删除。
   
- **性能消耗不同**
    - 性能消耗不同。v-if有更高的切换消耗；v-show有更高的初始渲染消耗。

- 使用场景
    - 如果**需要非常频繁地切换，则使用v-show较好**，如：手风琴菜单，tab 页签等； **如果在运行时条件很少改变，则使用v-if较好，如：用户登录之后，根据权限不同来显示不同的内容。**  
