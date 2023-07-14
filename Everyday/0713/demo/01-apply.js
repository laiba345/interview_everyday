const obj = {
    name: 'Bob',
}

function greet(message) {
    console.log(`${ message }, ${ this.name }`);
}

// 指定上下文调用函数, 传入参数
greet.call(obj, ["hello"])
