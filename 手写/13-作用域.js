const globalVar = 10;

function outerFunction() {
  const outerVar = 20;

  function innerFunction() {
    const innerVar = 30;
    console.log(innerVar);   // 30
    console.log(outerVar);   // 20
    console.log(globalVar);  // 10
  }

  innerFunction();
}

outerFunction();
