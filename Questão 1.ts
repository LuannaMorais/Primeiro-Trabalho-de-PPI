const ni1 = +prompt('Digite um numero inteiro: ');
const ni2 = +prompt('Digite mais um numero inteiro: ');
const ni3 = +prompt('Digite mais um numero inteiro: ');

if (ni1 < ni2 + ni3) {
  document.write(`<p> True </p>`);
} else if (ni2 < ni1 + ni3) {
  document.write(`<p> True </p>`);
} else if (ni3 < ni1 + ni2) {
  document.write(`<p> True </p>`);
} else {
  document.write(`<p> false </p>`);
}