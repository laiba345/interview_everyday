const originalObject = { a: 1, b: { c: 2 } };
const deepCopiedObject = JSON.parse(JSON.stringify(originalObject));

deepCopiedObject.b.c = 3;

console.log(originalObject);          // { a: 1, b: { c: 2 } }
console.log(deepCopiedObject);        // { a: 1, b: { c: 3 } }
