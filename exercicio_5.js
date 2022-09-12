let Indice

Indice = prompt ("Qual é o índice de poluição atual: ")

if (Indice == 0.3){
    alert("O índice subiu para 0.3 o grupo 1 suspenda as atividades")
}else if(Indice == 0.4){
    alert ("O índice subiu para 0.4 os grupos 1 e 2 suspendam as atividades")
}else if (Indice == 0.5){
    alert("O índice subiu para 0.5 todos os grupos suspendam as atividades")
}else{
    alert("essa informação não faz sentido");
}