let estudantes: string[] = [
  'Adib',
  'Fernanda',
  'John',
  'Poliana',
  'Samuel',
  'Milena',
  'Edilson',
];

//Letra A//
console.log(estudantes[5]);

//Letra B//
console.log(estudantes.length);

//Letra C//
estudantes.push('Felipe', 'Antony', 'Rose');
console.log(estudantes.length);

//Letra D//
estudantes.splice(3, 3);
console.log(estudantes.length);

//Letra E//
for (let i: number = 0; i < estudantes.length; i++) {
  console.log(estudantes[i]);
}