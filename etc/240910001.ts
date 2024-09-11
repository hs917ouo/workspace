const SIZE = [
  { id: "XS" as const, price: 8000 },
  { id: "S" as const, price: 10000 },
  { id: "M" as const, price: 12000 },
  { id: "L" as const, price: 14000 },
  { id: "XL" as const, price: 15000 },
];
const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

console.log(totalPrice);
