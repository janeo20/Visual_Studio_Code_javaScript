export class Funcionario{
    nome: string
    idade: number
    profissao: string
    empresa: string

    constructor(
        nome: string,
        idade: number,
        profissao: string,
        empresa: string,
    ){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
        this.empresa = empresa
    }
    Vernome(){
        console.log (`O nome do funcionario é ${this.nome}`)
    }
    Veridade(){
        console.log (`A idade do funcionário é ${this.idade}`)
    }
    Verprofissao(){
        console.log (`Sua profissão é ${this.profissao}`)
    }
    Verempresa(){
        console.log (`Sua empresa é ${this.empresa}`)
    }
}