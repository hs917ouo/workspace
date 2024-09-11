const response = fetch("https://jsonplaceholder.typicode.com/users");
console.log(await (await response).json());

async function myRequest(url) {
  const response = await fetch(url);
  return response.json();
}

console.log(await myRequest("https://jsonplaceholder.typicode.com/users"));
