const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("졸려");
    resolve("나도");
  }, 1000);
});

p.then((succ) => {
  console.log("succ", succ);
});
