const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 成功的回调
    resolve("Promise resolved after 3 seconds");
  }, 3000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
