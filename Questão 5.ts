let resp_aluno: string = prompt('Insira as suas respostas: ');
let resp_certas: string = prompt('Insira as resposta do gabarito: ');
let qnt_questoes: number = +prompt('Quantidade de questões: ');
let qnt_acertos: number = 0;

for (let a = 0; a < qnt_questoes; a++) {
  if (resp_certas[a] == resp_aluno[a]) {
    qnt_acertos = qnt_acertos + 1;
  }
}

document.write(`<p> Quantidade de acertos: ${qnt_acertos}</p>`);
