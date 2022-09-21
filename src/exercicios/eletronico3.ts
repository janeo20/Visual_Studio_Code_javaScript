export class Eletronico{
    marca: string
    modelo: string
    cor: string
    ip: string

    constructor(
        marca: string,
        modelo: string,
        cor: string,
        ip: string,
    ){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ip = ip
    }
    Vermarca(){
        console.log(`A marca desse produto eletrônico é ${this.marca}`)
    }
    Vermodelo(){
        console.log(`O modelo desse produto eletrônico é ${this.modelo}`)
    }
    Vercor(){
        console.log(`A cor de produto eletrônico é ${this.cor}`)
    }
    Verip(){
        console.log(`O ip desse produto eletrônico é ${this.ip}`)
    }
}