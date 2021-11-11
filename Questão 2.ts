const m1 = +prompt('Insira a primeira nota com o valor de 0 a 100: ');
const m2 = +prompt('Insira a segunda nota com o valor de 0 a 100:: ');

let media = (m1 * 4 + m2 * 6) / 10;

if (media >= 60) {
  document.write(`<p> você foi aprovado(a) com média ${media}</p>`);
} else if (media >= 20) {
  document.write(`<p> você ficou em avaliação final com média ${media}</p>`);
} else {
  document.write(
    `<p> infelizmente você não foi aprovado(a) e ficou com a média ${media}!</p>`
  );
}
