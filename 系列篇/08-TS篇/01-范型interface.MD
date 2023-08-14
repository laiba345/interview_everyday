Typescript的范型interface，使用interface
1. 在TS中，范型可以应用于接口，允许我们定义具有通用类型的接口
2. 语法
```
interface GenericInterface<T> {
  property: T;
  method(arg: T): T;
}
```
3. 使用范型接口并指定具体的类型，
- 
```
const myInterface: GenericInterface<number> = {
    property: 18, 
    method: (arg) => arg + 1
}
console.log(myInterface.property); // 输出: 42
console.log(myInterface.method(10)); // 输出: 11
```