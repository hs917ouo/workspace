const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

const { id: idInfo, name: nameInfo, addr: addrInfo } = user;

const userInfo = { id: idInfo, name: nameInfo, addr: addrInfo };

console.log("🚀 ~ userInfo:", userInfo);
//const { passwd, ...userInfo} = user;

//const userInfo = {...user};
//delete userInfo.passwd;

--------------------------------------------------
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
--------------------------------------------------
const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial(k) {
  const { [k]: val } = user;
  const [, ...s] = [...val];
  return s.join("");
}

console.log(getValueExceptInitial("name"));
console.log(getValueExceptInitial("passwd"));
console.log(getValueExceptInitial("addr"));
--------------------------------------------------
// "use strict";

function f(a) {
  console.log("outer", a);
}

f(10);

{
  f(20);
  function f(a) {
    console.log("inner", a);
  }
  f(30);
}
f(40);
