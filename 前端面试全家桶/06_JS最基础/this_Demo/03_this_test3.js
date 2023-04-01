class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log(this)
    }
}

const zhangsan = new People('张三')
zhangsan.sayHi() // 张三这个对象