instanceof判断
    - instanceof的判断原理
        - Instanceof运算符的前面的，暂时称为A；后面一般是一个函数，暂时称为B
        - Instanceof的判断规则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果能找到同一个引用，返回true，否则返回false