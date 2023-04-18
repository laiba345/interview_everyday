sessionStorage，localStorage 和 cookie 的区别
- 共同点：都是保存在浏览器端，且同源的
- 区别:
    - **cookie 在浏览器和服务器之间来回传递**；而 sessionStorage 和 localStorage 不会自动把数据发送到服务器，**仅在本地保存**。
    - **存储大小限制不同**。cookie 不能超过 4K，因为每次 http 请求都会携带 cookie，所以 **cookie 只适合保存很小的数据**，如：会话标识。sessionStorage 和 localStorage 虽然也有存储大小限制，但比 cookie 大得多，可以达到 5M 或更大。
    - **数据有效期不同**。sessionStorage 仅在当前浏览器窗口关闭之前有效；localStorage 始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie 只在设置的 cookie 过期时间之前有效。
    - **作用域不同**。sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 和 cookie 在所有同源窗口中都是共享的。
