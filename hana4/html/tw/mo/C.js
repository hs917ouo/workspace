// mods/C.js
import { callDepth, b } from "./B.js";
import { afn } from "./A.js";
console.log("C first");
export function c(depth = 0) {
  console.log(`${callDepth(depth)}C-c`);
  b(depth + 1);
}
console.log("C second");
export default (depth = 0) => {
  console.log(`${callDepth(depth)}C-def`);
  afn();
};
console.log("C third");
