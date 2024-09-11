/**************선언부******************/
"use strict";
var gg = undefined;
let bb = undefined;
var kk = undefined;
//const yy = undefined;

function f1(x, y) {
  var gg = undefined;
  let bb = undefined;
  var zz = undefined;

  function f2(t, u, v) {
    console.log(t, "`inner2`", xx, zz);
  }
  gg = 11;
  bb = 22;
  console.log("f1>", gg, bb, zz, f2, f2.length);
  f2("* first");
  {
    //const xx = undefined;
    function f2(t) {
      console.log(t, "`nested`", xx, zz);
    }
    const xx = 99;
    f2("* nest-first");
    zz = 88;
  }
  zz = 800;
  console.log("🚀  gg:", gg);
  f2("* second");
}
function f2(g) {
  console.log(g, "global f2>", gg, bb, xx, kk);
}

let xx;
/**************실행부******************/
gg = 1;
bb = 2;
xx = 9;

if (gg > 0) {
  var kk = undefined;
  //const yy = undefined;
  kk = 33;
  const yy = 9;
}

if (gg > 0) {
  kk = 33;
  const yy = 9;
}
f1(1, 2);
console.log("kkkkk>>", kk);
f2("* third");
