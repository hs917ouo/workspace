// ex1();
// ex2();
// ex3();
// ex4();
// ex5();
function ex1() {
  for (let i = 0.1; i <= 1; i = +(i + 0.1).toFixed(1)) console.log(i);
}

function ex2() {
  for (let i = 1; i <= 10; i += 1) {
    let i_sqrt = Math.sqrt(i);
    if (i_sqrt !== parseInt(i_sqrt)) {
      console.log(+i_sqrt.toFixed(3));
    }
  }
}

function ex3() {
  const today = new Date();
  const day = today.getDay();
  switch (day) {
    case 0:
      console.log("오늘은 일요일입니다.");
      break;
    case 1:
      console.log("오늘은 월요일입니다.");
      break;
    case 2:
      console.log("오늘은 화요일입니다.");
      break;
    case 3:
      console.log("오늘은 수요일입니다.");
      break;
    case 4:
      console.log("오늘은 목요일입니다.");
      break;
    case 5:
      console.log("오늘은 금요일입니다.");
      break;
    case 6:
      console.log("오늘은 토요일입니다.");
      break;
    default:
      console.log("Error");
  }
  const WEEK_NAMES = "일월화수목금토";
  console.log(`오늘은 ${WEEK_NAMES[day]}요일입니다.`);
}

function ex4() {
  let a = 3;
  let b = 0.623;
  function addPoints(a, b) {
    const a_int_length = Math.round(a).toString().length;
    const a_length = a.toString().length;
    const a_float_length =
      a_int_length === a_length ? 0 : a_length - a_int_length - 1;

    const b_int_length = Math.round(b).toString().length;
    const b_length = b.toString().length;
    const b_float_length =
      b_int_length === b_length ? 0 : b_length - b_int_length - 1;

    const fix =
      a_float_length > b_float_length ? a_float_length : b_float_length;
    return +(a + b).toFixed(fix);
  }
  console.log(addPoints(a, b));
}

function ex5() {
  let c = 9;
  function printIrr(c) {
    let c_sqrt = Math.sqrt(c);
    do {
      console.log(c, +c_sqrt.toFixed(3));
      c++;
      c_sqrt = Math.sqrt(c);
    } while (c_sqrt !== parseInt(c_sqrt));
  }
  printIrr(c);
}
