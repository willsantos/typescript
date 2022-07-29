// Como podemos rodar isso em um arquivo .ts sem causar erros?
//Criando uma interface para o employee

interface Funcionario {
  code: number;
  name: string;
}

const employee = {} as Funcionario;

employee.code = 10;
employee.name = "John";

console.log(employee.code);
console.log(employee.name);
