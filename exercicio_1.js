let P = 0, E = 0, M = 0;

P = prompt ("qual o peso dos tomates? ")

if(P > 50){
    E = P - 50
    M = E * 4
    alert ("O valor da multa que você devera pagar é: " + M)
}else{
alert("O valor da multa é: " + M + "\n" + "O excesso foi de: " + E)
}