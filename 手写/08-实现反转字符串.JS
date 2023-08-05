/* 
    反转字符串 ~ 
*/
// 1、使用数组反转方法
function reverseString(str) {
    /* 
        split() - 字符串转换为数组
        join() - 数组转换为字符串

    */
    return str.split('').reverse().join('')
}

// const inputString = "hello";
// const reversedString = reverseString(inputString);
// console.log(reversedString); // Output: "olleh"

// 2、循环逐渐字符反转
function reverseStringTwo(str) {
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i)
    }
    return reversed
}

const inputString = "hello";
const reversedString = reverseStringTwo(inputString);
console.log(reversedString); // Output: "olleh"