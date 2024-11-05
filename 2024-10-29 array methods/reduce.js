const skaiciai = [1, 2, 3, 4];

const sumas = skaiciai.reduce((accumulator, value) => accumulator + value, 0);

const prekes = [
  { name: 'Staline lempa', price: 5.75 },
  { name: 'Stalas', price: 30.75 },
  { name: 'Kamuolys', price: 228.75 },
  { name: 'Dekoratyvinis akmuo', price: 1.75 },
  { name: 'Biblija', price: 20.75 },
];

const prekiuSuma = prekes.reduce(
  (accumulator, produktas) => accumulator + produktas.price,
  0
);
console.log(prekiuSuma);
