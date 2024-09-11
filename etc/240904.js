// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

// 2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.

// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.

// 4) 오늘(9월 3일)로 부터 100일 후의 날짜는?

fn1 = () => {
  date1 = new Date(1970, 1, 1);
  date2 = new Date(1970, 1, 2);
  console.log((date2 - date1) / 1000);
};

fn2 = () => {
  date = new Date();
  tmp_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  day = () => 1 + Math.round((tmp_date.getDate() - 1) * Math.random());
  let arr = [];
  for (i = 0; i < 5; i++) {
    arr.push(day());
  }

  arr.sort((a, b) => b - a);
  return arr;
};

const ret2 = fn2();
console.log(ret2);
let prev = ret2[0];
for (let i = 1; i < ret2.length; i++) {
  assert.equal(prev >= ret2[i], true);
  prev = ret2[i];
}


fn3 = () => {
  date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  const day = "일월화수목금토";
  console.log(`${day[date.getDay()]}요일`);
};

fn4 = () => {
  date = new Date();
  date.setDate(date.getDate() + 100);
  console.log(date);
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const f1 = debounce(console.log, 500);
const f2 = throttle(console.log, 500);

for (let i = 0; i < 10; i++) f2(i);
/////////////////////////////////////////////////////
// const regexp = /senior|coding/gi;
const regexp = RegExp(/senior|coding/gi);
console.log(regexp.lastIndex);
if (regexp.test("Junior Developer")) console.log("OK1");
console.log(regexp.lastIndex);
if (regexp.test("Senior Developer")) console.log("OK2");
console.log(regexp.lastIndex);
if (regexp.test("JS Coding")) console.log("OK3");
console.log(regexp.lastIndex);
if (regexp.test("JavaScript Coding")) console.log("OK4");
console.log(regexp.lastIndex);
/////////////////////////////////////////
var s = "강원도 고성군 토성면";
console.log(s.match(/성/));
console.log(s.match(/성/g));
console.log(s.match(/.../g));
console.log(s.match(/\S\S\S/g));
console.log(s.match(/도|고|리/g));
console.log(s.match(/성군/g));
console.log(s.match(/성(군|면)/g));
console.log(s.match(/.성(군|면)/g));
console.log((s = "강원도 고성군 토성면 북면"));
console.log(s.match(/.성(군|면)/g));
console.log(s.match(/..?(군|면)/g));
console.log(s.match(/..{0,1}(군|면)/g));
console.log(s.match(/\S.?(군|면)/g));
console.log(s.match(/\S.*(군|면)/g));
console.log(s.match(/[가-기]/g));
console.log(s.match(/[가-기]\S/g));
//////////////////////////////////////////
const total = { price: 45000, vat: 4500 };
const fmt = (txt, a) => txt[0] + a.toLocaleString().padStart(15, " ") + txt[1];
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);