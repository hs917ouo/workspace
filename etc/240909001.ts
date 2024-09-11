const myName: String = "hs917ouo";
const myAge: number = 17;
console.log(`Hello,${myName}`);
console.log(`${myAge} years old!`);
console.log("Hello~");

let x: number | string;
x = 1;
console.log(x);
x = "abc";
console.log(x);

const len = x.length;

let y: number | undefined = undefined;
console.log(y);
//

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;
let customer: Customer;
let m: Member;
let g: Guest;
customer = {
  name: "홍길동",
  age: 26,
  addr: "용산구",
};

const xx = {
  name: "hong",
  age: 26,
  addr: "seoul",
  discountRate: 1,
};

if ("age" in xx) g = xx;
if ("addr" in xx && "discountRate" in xx) m = xx;

if ("discountRate" in xx) {
  m = xx;
  console.log("mmm>>>>", m);
}

if ("age" in xx) g = xx;

// let s: string;
// let n: number;
// let y: string | number = "1";
// if (typeof y === "string") {
//   s = y;
//   console.log("string", s);
// } else {
//   n = y;
//   console.log("number", n);
// }

// console.log(typeof xx);


type TUser = { id: number; name: string };
type TUser2 = { id: number; name: string; addr?: string };

const kim = { id: 2, name: "Kim", addr: "Pusan" } as TUser;
const y1: TUser[] = [{ id: 1, name: "Hong" }, kim];
// console.log(y1[1]);

const hong: TUser = { id: 1, name: "Hong", addr: "Pusan" } as TUser;
const lee: TUser2 = { id: 3, name: "Lee", addr: "Seoul" };
console.log("hong: ", hong);
console.log("lee: ", lee);

let tmpUser: TUser = lee;
console.log("tmpUser: ", tmpUser);

let partner: TUser = { ...lee, id: 2, name: "Kim" };
console.log("parter: ", partner);

// let partner2: TUser = { ...hong, id: 3, addr: "Daejeon" };
// console.log(partner2);

let friend: TUser = { ...lee };
console.log("friend: ", friend);

const xxx = { id: 9, addr: "Sokcho" };
let friend2: TUser = { ...xxx, id: 8, name: "Go" };
console.log("friend2: ", friend2);
