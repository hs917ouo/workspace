const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  //   zs: new Set([arr, hong]),
  //   zws: new WeakSet([arr, hong]),
  //   zm: new Map([[hong, arr]]),
  //   zwm: new WeakMap([[hong, arr]]),
};

// for (a in kim) {
//   console.log(kim[a]);
// }

const recursive = (obj) => {
  const ret = {};
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj;
  if (typeof obj !== "object") {
    return obj;
  }
  for (a in obj) {
    ret[a] = recursive(obj[a]);
  }
  return ret;
};

console.log(recursive(kim));

// console.log(kim);
// const a = null;
// const b = () => {
//   return null;
// };
// const c = b();
// console.log(c === null);

// const a = [1, 2, 3, 4, 5];
// console.log(Array.isArray(a));

[Symbol()]: 9;