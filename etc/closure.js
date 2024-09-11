function loopFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let pre_pre_result = 0;
  let pre_result = 1;
  for (let i = 0; i < n - 1; i++) {
    let result = pre_pre_result + pre_result;
    pre_pre_result = pre_result;
    pre_result = result;
  }
  return result;
}

console.log(loopFibonacci(7));
//--------------------------------
function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(recursiveFibonacci(8));
//---------------------------------
function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFibonacci = memoized(function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

console.log(memoizedFibonacci(8));
//---------------------------------------