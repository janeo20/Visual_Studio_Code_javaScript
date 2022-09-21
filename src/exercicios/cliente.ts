export class Cliente{
    nome: string;
    idade: number;
    telefone: string;
    cpf: string;

 constructor(
    nome: string,
    idade: number,
    telefone: string,
    cpf: string,
 ){
    this.nome = nome
    this.idade = idade
    this.telefone = telefone
    this.cpf = cpf
 }
 verCliente(){
    console.log(`O nome do cliente é ${this.nome}, \nA idade do cliente é ${this.idade}, \nO telefone do cliente é ${this.telefone}, \nO cpf do cliente é ${this.cpf}`)
 }
}