问到localStorage和其他前端缓存的区别，cookie如何存放得更安全一些不被js获取到？
- 用于在客户端存储数据，与cookie不同的是，localStorage的数据不会随着每次http请求发送到服务器端。而且localStorage存储的数据量比cookie更大
- ，localStorage也比cookie更安全一些，因为localStorage只能通过JavaScript访问，而cookie可以被服务器和客户端JS代码访问，因此使用localStorage存储敏感信息时要注意避免XSS攻击。
- 如何将cookie存放得更安全一些不被JS获取到呢？
    - 设置HttpOnly属性：设置cookie的HttpOnly属性可以防止客户端的JavaScript获取cookie值，从而增强了cookie的安全性。
    - 使用加密算法：在服务器端使用加密算法对cookie进行加密处理，这样即使黑客截获了cookie，也无法进行解密获取其中的信息。
    设置Secure属性：设置cookie的Secure属性可以防止未经过加密的HTTP请求- 截获cookie，提高了cookie的安全性