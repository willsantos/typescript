// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let total = 0;

//campoSaldo.innerHTML = 0;
limparSaldo();

function somarAoSaldo(soma: number): void {
  if (campoSaldo) {
    total += soma;
    campoSaldo.innerHTML = "R$ " + total.toString();
  }
}

function limparSaldo(): void {
  if (campoSaldo) {
    total = 0;
    campoSaldo.innerHTML = "";
  }
}
if(botaoAtualizar){
  botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
  });
}

if(botaoLimpar){
  botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });
}


