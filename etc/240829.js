const assert = require("assert");

const hong = { id: 1, name: "Hongi" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Parki" };

const users = [hong, kim, lee, park];
const idxKim = users.indexOf(kim);
console.log("🚀  idxKim:", idxKim);

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log("🚀  idxId2:", idxId2);

const idxId3 = users.findLastIndex((a) => a.id === 3);
const idxId1 = users.findLastIndex(find3);
console.log("🚀  idxId1:", idxId1);

const findId = (id) => (a) => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

console.log("---------------");
users.forEach((a) => console.log(a.id, a.name));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isOdd = (n) => n % 2 !== 0;
// for (const val of arr) {
//   console.log(isOdd(val));
// }
arr.forEach((a) => console.log(a, isOdd(a)));

const kim2 = users.find((user) => user.name === "Kim");
console.log("🚀  kim2:", kim2);
const hong2 = users.findLast((user) => user.name === "Hong");
console.log("🚀  hong2:", hong2);

console.log("--------------");
const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀  hasIUsers:", hasIUsers);

const names = users.map((user) => user.name);
console.log("🚀  names:", names);

const isPrime = (n) => {
  if (n === 1) return false;
  return Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
    (a) => n % a !== 0
  );
};
const makeArray = (cnt, startNum = 1) =>
  Array.from({ length: cnt-startNum }, (_, i) => i + startNum);

const hasPrime = (arr) => arr.some(isPrime);
const getPrimeNumbers = (arr) => arr.filter(isPrime);

console.log(hasPrime(arr));
console.log(getPrimeNumbers(arr));

const arr100 = makeArray(100, 50);

console.log(hasPrime(arr100));
console.log(getPrimeNumbers(arr100));

assert.deepStrictEqual(
  getPrimeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);



//---------------------------------

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
objs.reduce((acc, item) => (acc = item));
console.log(objs);


obj0 = { id: 1 };
console.log(obj);
obj.name = "Hong";
console.log(obj);
obj1 = { name : "Hong"};

const objAPlusB = (objA,objB) => {
	Object.keys(objB);
};
//---------------------------------------
function push(array, ...args) {
  tmp_arr = [...array];
  tmp_arr.push(...args);
  return tmp_arr;
}

function pop(array, ...args) {
  tmp_arr = [...array].slice(0, array.length - args[0]);
  return tmp_arr;
}