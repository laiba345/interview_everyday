interface和type的区别
- 1、定义方式不同
```
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};
```
- 2、语法上的不同
    - interface可以被扩展和实现；而type不可以
    ```
    interface Animal {
        name: string;
        eat(): void;
    }

    interface Dog extends Animal {
        bark(): void;
    }

    type Animal = {
        name: string;
        eat(): void;
    };

    // Error: Type aliases cannot be extended.
    type Dog = Animal & {
        bark(): void;
    };
    ```
    - interface**可以声明多次并自动合并**，而type不能。
    ```
    interface Person {
        name: string;
    }

    interface Person {
        age: number;
    }

    const person: Person = {
        name: 'Alice',
        age: 20
    };

    type Person = {
        name: string;
    };

    // Error: Duplicate identifier 'Person'.
    type Person = {
        age: number;
    };

    const person: Person = {
        name: 'Alice',
        age: 20
    };
    ```
- 3、适用场景不同
    - interface适合用于**描述一个对象或类的结构**，或者用于定义函数的参数或返回值的类型。
    - type适合用于**定义一些复杂的类型，如联合类型、交叉类型、函数类型等**。



