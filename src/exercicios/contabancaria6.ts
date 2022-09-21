export class ContaBancaria{
    titular: string;
    agencia: string;
    conta: string;
    private saldo: number;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: number,
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    Versaldo(){
        console.log(`Saldo da conta é ${this.saldo}`)
    }
    sacar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            console.log (`Saque de R$ ${valor} realizado com sucesso`)
        }else{
            console.log (`Saque de R$ ${valor} impossovel de ser realizado`)
        }
        
        }
        deposito(valor: number){
            if(valor > 0){
                this.saldo += valor
                console.log(`Deposito de R$ ${valor} Realizado com sucesso.`)
            }else{
                console.log(`Deposito de R$ ${valor} impossivel de ser realizado.`)
            }
        }
    }
