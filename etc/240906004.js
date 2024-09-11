const afterTime = (sec) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));

const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter((n) => n % 2);

console.log("odds=", rrr);
