/* 
    1、模拟Vue2的响应式原理
        - 通过在浏览器中进行模拟
*/
let person = {
  name: "张三",
  age: 18,
};

let p = {};
// 可以用循环的方式来对所有的属性进行代理
Object.defineProperty(p, "name", {
  configurable: true,
  // 有人读取name时调用
  get() {
    console.log("有人读取了name属性");
    return person.name;
  },
  // 有人修改name时调用
  set(value) {
    console.log("有人修改了name属性");
    person.name = value;
  },
});

Object.defineProperty(p, "age", {
  get() {
    //有人读取age时调用
    return person.age;
  },
  set(value) {
    //有人修改age时调用
    console.log("有人修改了age属性,我发现了,我要去更新界面!");
    person.age = value;
  },
});
