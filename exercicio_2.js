let C, N, S, E = 0, ST, SE;

N = prompt ("Quantas horas você trabalhou? ")

S = N * 10

if (N > 50){
    E = N - 50
    E = E * 20
    SE = S + E
    ST = S + SE 
    alert("Seu salário total é: " + ST + "\n" + "seu salário excedente é: " + SE)
}else{
    alert("Seu salário total é: " + S)
}