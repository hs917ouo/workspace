import assert from "assert";

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 1000, val);
  });

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    if (!promises?.length) reject(new Error("Promise를 전달하세요!"));

    const results = [];
    let cntToRun = promises.length;
    for (let i = 0; i < promises.length; i += 1) {
      const promise = promises[i];
      // Promise.resolve(promise)
      (promise instanceof Promise ? promise : Promise.resolve(promise))
        .then((succ) => {
          results[i] = succ;
          // results.push(succ); // BAD
          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch(reject);
    }
  });

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);
