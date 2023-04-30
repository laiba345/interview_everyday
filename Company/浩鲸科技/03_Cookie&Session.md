Cookie & Session
- 概念：Cookie和Session都是用于在客户端和服务器之间存储数据的机制

- 主要区别
    - 1. 存储位置：Cookie是存储在客户端（即浏览器）中的一小段文本，而Session是存储在服务器端的数据结构。

    - 2. **安全性：由于Cookie存储在客户端，因此它的安全性比Session要低**。Cookie可以被客户端修改或篡改，从而导致安全问题。而Session存储在服务器端，客户端无法直接访问，因此相对更加安全。

    - 3. **存储容量：Cookie的存储容量比较小**，一般只有4KB左右。而Session的存储容量相对较大，取决于服务器端的存储容量。

    - 4. **生命周期：Cookie可以设置过期时间，即在一定时间内有效，过期后会自动删除**。而Session的生命周期取决于服务器端的设置，通常在用户关闭浏览器或一段时间内不活动时会自动失效。
        - 

    - 5. **使用场景：Cookie通常用于存储一些较小的数据，例如用户的偏好设置、购物车数据等**。而Session通常用于存储用户的登录状态、用户身份验证等重要信息。
        - 参考项目中的SessionStorage

SessionStorage、LocalStorage和Cookie都是用于在客户端存储数据的机制，它们之间的主要区别如下：

- 1. 存储位置：Cookie存储在客户端（即浏览器）中，SessionStorage和LocalStorage也是存储在浏览器中，**但是它们的存储位置不同。SessionStorage和LocalStorage存储在浏览器本地的存储区域中，而Cookie存储在浏览器的Cookie文件中**

- 2. 存储容量：**Cookie的存储容量比较小，一般只有4KB左右。而SessionStorage和LocalStorage的存储容量相对较大，通常可以存储5MB左右的数据**。

- 3. 生命周期：**Cookie可以设置过期时间，即在一定时间内有效，过期后会自动删除**。而SessionStorage的生命周期是会话级别的，即在浏览器会话期间有效，浏览器关闭后会自动删除；LocalStorage的生命周期是永久性的，除非用户手动清除，否则数据会一直保存在本地存储区域中。

- 4. 安全性：Cookie由于存储在客户端，因此它的安全性比较低。Cookie可以被客户端修改或篡改，从而导致安全问题。而SessionStorage和LocalStorage存储在浏览器本地存储区域中，相对比较安全，但是仍然存在被恶意攻击者获取的可能。

- 5. 使用场景：Cookie通常用于存储一些较小的数据，**例如用户的偏好设置、购物车数据等**；SessionStorage和LocalStorage通常用于存储较大的数据，例如**表单数据、应用程序状态**等。

