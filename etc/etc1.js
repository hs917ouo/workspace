const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));


//
// function f(a, b) {
//   return a + b;
// }

// function once(fn) {
//   let count = 0;
//   if (count === 0) {
//     count += 1;
//     return fn;
//   } else {
//     return undefined;
//   }
// }

// console.log(once(f(1, 2)));
// console.log(once(f(1, 3)));
// console.log(once(f(1, 4)));




function once(fn) {
  this.used;
  const change = function () {
    console.log(this);
    used = true;
    return fn;
  };
  return this.used ? undefined : change.bind(this)();
}



const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template = function (fn) {
  return function (...args) {
    before();
    console.log(...args);
    fn(...args);
    after();
  };
};

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);
console.log("square of 7 =", template((n) => n ** 2)(7));
