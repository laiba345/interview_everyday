/* 
    call
    1. call 方法用于调用一个函数,并指定函数执行时候的this值和参数列表
    2. 参数列表是逐个传入的
    3. 立即执行函数
*/
function sayHello(message) {
    console.log(message, this.name);
}

const person = { name: 'Alice' };
sayHello.call(person, 'Hello'); // 输出：Hello Alice


/* 
    apply
    1. apply方法也用于调用一个函数,类似于call,但它接受的是一个参数数组
    2. 参数数组中的元素会逐个传入函数作为参数
    3. 立即执行函数
*/

function sayHello(message) {
    console.log(message, this.name);
}

const person = { name: 'Bob' };
sayHello.apply(person, ['Hi']); // 输出：Hi Bob

/* 
    bind
    1. 不会立即执行, 而是返回一个新的函数, 新函数的this值被绑定到指定的值
    2. bind方法可以预设参数
*/
function sayHello(message) {
    console.log(message, this.name);
}

const person = { name: 'Charlie' };
const boundFunction = sayHello.bind(person, 'Hey');
boundFunction(); // 输出：Hey Charlie

