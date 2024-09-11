const depthTimer = (depth) =>
  new Promise((resolve, reject) => {
    if (depth <= 3) {
      setTimeout(() => {
        console.log("depth", depth, new Date());
        resolve(depth + 1);
      }, depth * 1000);
    } else reject("Already 3-depth!!");
  });

// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

console.log("START!", new Date());

depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.log(err));
