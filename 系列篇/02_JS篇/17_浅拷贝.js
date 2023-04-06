// 方式一
let a = { count: 1, deep: { count: 2 } };
let b = Object.assign({}, a);

// 方式二
let c = { ...a };

// 实现一个浅拷贝
function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}
