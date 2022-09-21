export class Patinete{
    marca: string
    cor: string
    preco: number

    constructor(
        marca: string,
        cor: string,
        preco: number,
    ){
        this.marca = marca
        this.cor = cor
        this.preco = preco
    }
    Vermarca(){
        console.log(`A marca desse patinete é ${this.marca}`)
    }
    Vercor(){
        console.log(`A cor do patinete é ${this.cor}`)
    }
    Verpreco(){
        console.log(`O preço do patinete é ${this.preco}`)
    }
}