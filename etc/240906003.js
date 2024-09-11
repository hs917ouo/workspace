console.log("1. 동기 코드 시작");

const promise = new Promise((resolve, reject) => {
  console.log("2. Promise 시작");
  setTimeout(() => {
    resolve("3. 1초 후 완료"); // 1초 후에 resolve 호출
  }, 5000);
});

promise
  .then((result) => {
    console.log("HI");
    console.log(result); // 1초 후에 출력
    return new Promise((resolve, reject) => {
      console.log("4. 새 Promise 생성");
      setTimeout(() => {
        resolve("5. 3초 후 완료"); // 2초 후에 resolve 호출
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result); // 2초 후에 출력
    return new Promise((resolve, reject) => {
      console.log("6. 새 Promise 생성");
      setTimeout(() => {
        resolve("7. 1초 후 완료"); // 2초 후에 resolve 호출
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // 바로 출력
  })
  .catch((error) => {
    console.log("에러 발생:", error);
  });

console.log("8. 동기 코드 끝");
