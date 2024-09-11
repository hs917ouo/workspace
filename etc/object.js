const arr = [100, 200, 300, 400, 500, 600, 700];

for (i in arr) {
  console.log(i);
  console.log(arr[i]);
}

for (i of arr) {
  console.log(i);
}

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (i in obj) {
  console.log(i);
  console.log(obj[i]);
}

for (const k of Reflect.ownKeys(obj)) {
  console.log(obj[k]);
} //?

for (k of Object.entries(obj)) {
  console.log(k[1]);
}

for (k of Object.values(obj)) {
  console.log(k);
}

console.log(Object.getOwnPropertyDescriptors(obj));
console.log("--------------------------------");
Object.defineProperty(obj, "level", { enumerable: false });
console.log(Object.getOwnPropertyDescriptors(obj));
console.log("--------------------------------");
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log("--------------------------------");
Object.defineProperty(obj, "role", { writable: false });
console.log(Object.getOwnPropertyDescriptors(obj));