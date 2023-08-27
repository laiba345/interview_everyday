// 方式一
let a = { count: 1, deep: { count: 2 } };
console.log(a['count']); // []中使用字符串形式
let b = Object.assign({}, a);

// 方式二
let c = { ...a };

// 方式三
const originalArray = [1, 2, { value: 3 }];
const shallowCopiedArray = originalArray.slice();

shallowCopiedArray[2].value = 4;

console.log(originalArray);          // [1, 2, { value: 4 }]
console.log(shallowCopiedArray);     // [1, 2, { value: 4 }]


// 方式四
function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}
