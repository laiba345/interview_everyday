# props的使用(defineProps)
## 运行时声明和类型声明
- 运行时声明
    - 运行时声明；顾名思义，运行时的声明，也就是需要在运行中才会生效的一种声明。
    - 在这里，运行时声明指对于 props 的类型的声明，这种声明方式 IDE 是无法检测和给出提示的，只有在运行后才会给出提示，例如： 这是 options API 的 props 写法，也就是运行时声明。
    ```
    props: { // 普通vue 2 写法 当类型不对应时运行后浏览器才会给出提示
        height: Number,
        title: String,
    }
    这样的写法 IDE 是无法检测到 props 是否按照类型进行传递，只能运行后才能检测到，因此这种叫运行时声明。
    ```
    - `运行时声明`: 运行后才能检测到，这种写法IDE是无法检测到props是否按照类型进行传递的
- 类型声明
    - 类型声明；在这里类型声明指基于ts的类型检测，**对props进行类型的约束**，因此，要使用类型声明，需要基于ts，
    - 即:<script setup lang="ts">

## Props的基本用法
- <script setup> 中 声明 props ，必须使用 `defineProps API`，这是一个宏命令，不需要导入，直接可在 <script setup> 使用且只能在 <script setup> 
- 有两种方式可以使用这个宏命令类声明props，运行时声明和类型声明式，不同的方式下使用这个宏命令后props将具备不同的类型推断
1. 运行时声明；defineProps 运行时声明的基本用法如下，仅支持运行时的校验
```
<script setup lang='ts'>
const props = defineProps({
foo: String,
bar: {
  type: Number,
  required: true
}
})
</script>
```
- 接到的props直接可在模板中直接使用，这与vue2.x是一致的，

2. 类型声明；defineProps类型声明的基本用法如下，完美的支持IDE的类型推断和检查
```
<script setup lang='ts'>
interface List {
    id: number,
    content: string
}

const props = defineProps<{
  foo?: string
  //list :  {id: number , content: string}[] 可以写成行内的
  list: List // 接口
}>()
</script>
```
注意：运行时声明和类型声明不可以同时使用

## props的默认值 widthDefaults
- defineProps 使用类型声明时的不足之处在于，它没有可以给props提供默认值的方式；为了解决这个问题，提供了withDefaults宏命令 
- 宏命令；不需要导入，直接使用；  
```
<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string,
  list?: List.Basic[],
}>(), {
  title: 'Hello withDefaults',
  list: () => [{ id: 3, content: '3', isDone: false }],
});
</script>
```



    

