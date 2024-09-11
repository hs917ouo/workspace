const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  console.log("Hi~");
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const data = await res.json();

  return data.name;
};

console.log(await f());
