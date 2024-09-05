hong = { id: 1, name: "Hong" };
lee = { id: 2, name: "Lee" };
unknown = { id: 3 };
ex = { name: "Hwang" };

function f1(user) {
  console.log(user.id, user.name);
}

function f2({ id, name } = user) {
  console.log(user);
} // 오답, = user는 쓰는거 아님

const f3 = ({ ...user }) => {
  console.log(user);
};

// f1(hong);
// f2(unknown);
//f3(hong);

function f4({ id, name }) {
  console.log(id, name);
} // f2의 정답

f4(lee);
