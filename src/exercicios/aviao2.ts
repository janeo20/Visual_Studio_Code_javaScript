export class Aviao{
    marca: string
    modelo: string
    cor: string

    constructor(
        marca: string,
        modelo: string,
        cor: string,
    ){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }

    Vermarca(){
        console.log(`A marca desse avião é ${this.marca}`)
    }
    vermodelo(){
        console.log(`O modelo desse avião é ${this.modelo}`)
    }
    vercor(){
        console.log(`A cor desse avião é ${this.cor}`)
    }
}