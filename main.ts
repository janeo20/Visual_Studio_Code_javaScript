// import { Pessoa } from "./src/pessoas"; 

// let pessoa1 = new Pessoa();

// pessoa1.nome = "janderson";
// pessoa1.cpf = "186.283.232-67";
// pessoa1.idade = 26;
// pessoa1.telefone = "(21)98765-3452";

// console.log (`O nome da pessoa é: ${pessoa1.nome} `);




// import { ContaBanco } from "./src/contabanco";

// let conta1 = new ContaBanco("janderson", "005-4", "4002-52", 500)

// conta1.deposito(500);
// conta1.sacar(600);
// conta1.verSaldo();
//


//                         HERANÇA  

import { Funcionario } from "./src/funcionario";
import { Pessoadois } from "./src/pessoadois";

let pessoa2 = new Funcionario("Liza", "054.846.235.28", "48.784.168-x", "Embu das trevas", 26, "15251515ass", "Instrutora", "45125145", 500);

//pessoa2.verDados();
pessoa2.verFuncionario();