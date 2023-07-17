/* 
    使用JS获取DOM的方法
*/
// 1、通过元素的ID获取  getElementById 单数的形式
const element1 = document.getElementById('elementID')

// 2、通过选择器获取单个元素
/* 
    选择器来获取 querySelector
    1. 类选择器
    2. ID选择器
    3. 标签选择器
*/
const element2 = document.querySelector('.className'); // 通过类名选择器
const element3 = document.querySelector('#elementId'); // 通过ID选择器
const element4 = document.querySelector('tagName'); // 通过标签名选择器

// 3、通过选择器获取多个元素(返回NodeList集合)
/* 
    选择器获取多个元素
    querySelectorAll() 
*/
const element5 = document.querySelectorAll('.className'); // 通过类名选择器
const element6 = document.querySelectorAll('tagName'); // 通过标签名选择器

// 4、通过类名获取多个元素(返回HTMLCollection集合)
const element7 = document.getElementsByClassName('className');

// 5、通过标签名获取多个元素(返回HTMLCollection集合)
// getElementsByTagName复数的形式
const element8 = document.getElementsByTagName('tagName');
