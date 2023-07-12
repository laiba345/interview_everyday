Set和WeakSet的区别：
1. Set是一种**存储唯一值的集合**。（它的值可以是任何数据类型：原始类型或对象引用）Set中的值是唯一的，重复的值会被自动去重。Set提供了一系列方法来添加、删除、查找和遍历元素

2. WeakSet是一种**存储对象引用的集合**。与Set不同，WeakSet中的对象引用是**弱引用，即如果对象在其他地方没有被引用，垃圾回收器可能会将其回收**。WeakSet不提供通用的方法来获取集合的大小、迭代元素或清空集合，它主要用于临时存储对象，且不能被枚举。（只能存储对象引用）
```
// 创建一个WeakSet
const weakSet = new WeakSet();

// 创建对象
const obj1 = {};
const obj2 = {};

// 添加对象到WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// 检查对象是否存在
console.log(weakSet.has(obj1)); // 输出: true

// 删除对象
weakSet.delete(obj2);
```

Map和WeakMap的区别：
1. Map是一种键值对集合，其中的键和值可以是任意类型的数据；**Map中的键是唯一的，重复的键会覆盖旧的键值对**。Map提供了一系列方法来添加、删除、查找和遍历键值对。

2. WeakMap是一种存储对象键和与之关联的值的集合。与Map不同，WeakMap中的键是弱引用，即如果键没有其他引用，垃圾回收器可能会将其回收。WeakMap不提供通用的方法来获取集合的大小、迭代元素或清空集合，它主要用于临时存储与对象相关的数据

**总结**
1. Set和Map存储任意类型的值和键值对，而WeakSet和WeakMap存储对象引用。
2. WeakSet和WeakMap的对象引用是弱引用，可能会被垃圾回收器回收。
3. WeakSet和WeakMap没有通用的方法来获取集合的大小、迭代元素或清空集合。
4. WeakMap的键只能是对象，而Map的键可以是任意类型的数据。