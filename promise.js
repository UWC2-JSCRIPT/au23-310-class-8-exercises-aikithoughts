let myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    let number = Math.random();
    if (number > 0.5) {
      res(number);
    } else {
      rej(number);
    }
  }, 1000);
});

myPromise
  .then((value) => {
    console.log('Success!', value)
  })
  .catch((value) => {
    console.log('Failure', value);
  });

