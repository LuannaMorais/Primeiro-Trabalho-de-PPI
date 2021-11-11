const aluno: string = prompt('Insira as suas respostas: ');
const gabarito: string = prompt('Insira aS resposta do gabarito: ');
const n: number = +prompt('Quantidade de questões: ');
var acertos: number = 0;

for (var a = 0; a < n; a++) {
  if (gabarito[a] == aluno[a]) {
    acertos = acertos + 1;
  }
}

document.write(acertos);
