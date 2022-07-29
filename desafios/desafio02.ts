// Como podemos melhorar o esse código usando TS?
//Criando uma interface para pessoa e um enum para as profissões

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissoes;
}

enum Profissoes {
  Atriz,
  Padeiro,
}

let pessoa1: Pessoa = {
  nome: "maria",
  idade: 29,
  profissao: Profissoes.Atriz,
};

let pessoa2: Pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: Profissoes.Padeiro,
};

let pessoa3: Pessoa = {
  nome: "laura",
  idade: 32,
  profissao: Profissoes.Atriz,
};

let pessoa4: Pessoa = {
  nome: "carlos",
  idade: 19,
  profissao: Profissoes.Padeiro,
};

console.log(pessoa4);
