const assert = require("assert");

const arr = [1, 2, 3, 4];

const push = (array, ...args) => [...array, ...args];
const pop = (array, ...args) => [...array].slice(0, args[0] ? array.length - args[0] : -1);
const unshift = (array, ...args) => [...args, ...array];
const shift = (array, ...args) => [...array].slice(args[0] ? args[0] : 1);

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), [1, 2, 3]);
assert.deepStrictEqual(pop(arr, 2), [1, 2]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
//----------------------------------

const assert = require("assert");

const arr = [1, 2, 3, 4];

function deleteArray(array, ...args) {
  tmp_arr = [...array];
  tmp_arr.splice(args[0], args[1] ? args[1] - args[0] : array.length);
  return tmp_arr;
}

console.log(deleteArray(arr, 1, 3));

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);



  tmp_arr = [...array];
  if (typeof tmp_arr[0] === object){
    var idx = tmp_arr.findIndex((a) => a.id === args[0]);
    var val = 
  }
  else{
    idx = args[0];
  }
