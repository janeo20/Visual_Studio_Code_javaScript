export class Paciente{
    nome: string
    idade: number
    doenca: string
    hospital: string

    constructor(
        nome: string,
        idade: number,
        doenca: string,
        hospital: string,
    ){
        this.nome = nome
        this.idade = idade
        this.doenca = doenca
        this.hospital = hospital
    }
    Vernome(){
        console.log (`O nome do paciente é ${this.nome}`)
    }
    Veridade(){
        console.log (`A idade do paciente é ${this.idade}`)
    }
    Verdoenca(){
        console.log(`A doença do paciente é ${this.doenca}`)
    }
    Verhospital(){
        console.log(`Paciente esta sendo tratado no hospital ${this.hospital}`)
    }

}