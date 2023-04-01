let a
// 如果let i 定义在外面的话就是全局作用域
// 但是let i 定义在里面的话就是每次执行都会形成一个块级作用域
// 块级作用域：每次执行都会对块中的i进行获取

for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    // 这个alert(i)只有在事件点击的时候才会执行
    // 但是点击的时候，上述事件循环早就结束了
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}
