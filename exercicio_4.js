let N;

N = prompt ("digite um número: ")

if (N % 2 == 0 && N > 0){
    alert ("esse número e par e positivo")
}else if(N % 2 == 0 && N < 0){
    alert("esse número e par e negativo")
}else if (N % 2 != 0 && N > 0){
    alert ("esse número e ímpar e positivo")
}else{
    alert("esse número e ímpar e negativo")
}