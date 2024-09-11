const promi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

console.log("hi");

promi.then(
  (succ) => console.log("Resolve!"),
  (fail) => console.log("Reject!", fail)
);

console.log(Object.getOwnPropertyDescriptors(promi.then));
console.log(typeof promi.then);
console.log(typeof Promise);
console.log(typeof promi);
console.log(Object.getOwnPropertyDescriptors(promi));
console.log(Object.getOwnPropertyDescriptors(Promise));
