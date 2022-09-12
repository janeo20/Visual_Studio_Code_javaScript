let idade

idade = prompt ("Digite sua idade: ")

if (idade == 5 || idade == 6 || idade == 7){
    alert("Você está classificado/a para a categoria Infantil A")
}else if (idade == 8 || idade == 9 || idade == 10 || idade == 11){
    alert("Você está classificado/a para a categoria Infantil B")
}else if(idade == 12 || idade == 13){
    alert("Você está classificado/a para a categoria Juvenil A")
}else if(idade == 14 || idade == 15 || idade == 16 || idade == 17){
    alert("Você está classificado/a para a categoria Juvenil B")
}else if(idade >= 18){
    alert("Você está classificado/a para a categoria Adulto")
}else{
    alert("Você não tem idade suficiente para se classificar em nenhuma das categorias")
}