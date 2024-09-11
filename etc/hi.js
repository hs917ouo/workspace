let sum = 0;
for (let i = 1; i <= 100; i++){
  sum += i;
}
console.log(sum);
//-----------------------------------------
function addTo100(a) {
  if (a === 100) {
    return 100;
  }
  return a + addTo100(a + 1);
}
console.log(addTo100(1));
//------------------------------------------
function makeArray(n) {
  if (n === 1) {
    return [1];
  }
  return [...makeArray(n - 1), n];
}

console.log(makeArray(10));

//-------------------------------------------
function makeArray(n) {
  if (n === 1) {
    return [1];
  }
  return [n] + makeArray(n - 1);
}

console.log(makeArray(10));
//--------------------------------------------
function makeReverseArray(n) {
  if (n === 1) {
    return [1];
  }
  return [n, ...makeReverseArray(n - 1)];
}

console.log(makeReverseArray(5));
//---------------------------------------------
function makeArrayTco(n, arr = []) {
  if (n === 1) {
    return [1, ...arr];
  }
  return makeArrayTco(n - 1, [n, ...arr]);
}

console.log(makeArrayTco(10));
//----------------------------------------------
function makeArrayTco(n, arr = []) {
  if (n === 1) {
    return [...arr, 1];
  }
  return makeArrayTco(n - 1, [...arr, n]);
}

console.log(makeArrayTco(5));
