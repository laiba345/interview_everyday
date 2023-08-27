const zhangsan = {
    name:'张三', 
    sayHi() {
        // this即为当前对象 即zhangsan
        console.log('sayHi', this)
    }, 
    wait() {
        setTimeout(function() {
            /* 
                在setTimeout中使用普通函数作为参数时,
                该函数会在定时器触发后以全局作用域执行, 
                而不是在原来的上下文中执行; 
            */
            console.log('wait', this) // window 
            // console.log(this === Window);
        });
    }
}

zhangsan.sayHi()
zhangsan.wait()

const lisi = {
    name:'张三', 
    sayHi() {
        // this即为当前对象
        console.log(this)
    }, 
    wait() {
        setTimeout(() => {
            // this即为当前对象 => 箭头函数的取值是它的上级作用域的值
            // 还是当前对象;因为用了箭头函数
            console.log(this)
        });
    }
}