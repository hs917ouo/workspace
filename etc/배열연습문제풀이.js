const assert = require("assert");

const arr = [1, 2, 3, 4];

const deleteArray = (arr, start, end = Infinity) => {
  if (typeof start === "number")
    return arr.filter((a, i) => i < start || i >= end);
  return arr.filter((a) => a[start] !== end);
};

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);
//----------------------------------------------------------------
const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (newer) {
  return [...this, newer];
};

users.removeUser = function (toRemoveUser) {
  return this.filter((user) => user.id !== toRemoveUser.id);
};

users.changeUser = function (fromUser, toUser) {
  return this.map((user) => (user.id === fromUser.id ? toUser : user));
};

["addUser", "removeUser", "changeUser"].forEach((fn) =>
  Object.defineProperty(users, fn, {
    enumerable: false,
  })
);

users.addUser(hong); // [kim, lee, park, hong]
users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi); // [choi, lee, park]
//(주의) Array.prototype 조작 금지!

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
//----------------------------------------------------
const assert = require("assert");
const arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);
//ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.

// const classNames = (...args) => args.filter(Boolean).join(" ");

const classNames = (...args) =>
  args
    .map((a) => a.trim())
    .filter(Boolean)
    .join(" ");

// const classNames = (...args) => args.reduce((acc, a) => `${acc}${acc && a ? " " : ""}${a ? a : ""}`, "");
const ret2 = classNames("", "a b c ", " d", "", "e"); // cf. clsx
assert.strictEqual(ret2, "a b c d e");
// 주의: ' a b c d  e'면 안됨!!
//---------------------------------------------------------------
const assert = require("assert");

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

Array.reduce; //함수를 고차 함수로 직접 구현하시오.
const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduce = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return [];

  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);

  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};
reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
//cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);
//---------------------------------------------------
const assert = require("assert");

const arr = [1, 2, 3, 4, 5];
const sqrt = (a) => Math.sqrt(a);
const square = (a) => a ** 2;
const cube = (a) => a ** 3;
r5 = arr.map(square).map(sqrt).map(cube);

const aJobs = [square, sqrt, cube];
const bJobs = [cube, square];

const robot = (arr, jobs) =>
  arr.map((a) => jobs.reduce((acc, job) => job(acc), a));

assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);
//-------------------------------------------------
const assert = require("assert");

const keyPair = (arr, n) => {
  const cache = {};
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (val in cache) return [cache[val], i];
    cache[n - val] = i;
  }
};

keyPair([1, 3, 4, 5], 7); // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9); // [3, 4]  or [1, 5]
// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
//--------------------------------------------------
const assert = require("assert");

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  // (start - end ) * step > 0
  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }
  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }
  return results;
};

// return;
//다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, …, 99, 100]
range(-5); // [-5, -4, -3, -2, -1]
range(5, 5); // [5]                  range(1, 5, 0); // [1]
range(5, 5, 0); // [5]                  range(0, 5);   // [0, 1, 2, 3, 4, 5]
range(5, 5, -1); // [5]                  range(0, -1);  // [0, -1]
range(5, 1, 1); // []                   range(0, -3);  // [0, -1, -2, -3]
range(1, 5, -1); // []                   range(-3, 0);  // [-3, -2, -1, 0]
range(1, 5, 6); // [1]                  range(5, 1);   // [5, 4, 3, 2, 1]
range(0); // [0]     range(0, 0);  // [0]      range(0, 0, 5);   // [0]
range(2, 1, -5); // [2]     range(0, -1, -5);  // [0]

//
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
//----------------------------------------------
const assert = require("assert");

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];
  if ((start - end) * step > 0) return [];
  let tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start < 0 ? -1 : 0);
  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }
  return results;
};