/*
     Funcions / Funções

     Função void (vazia) - Não retorna nada.
     Função retur - Retorna uma valor para quem chamou a função.

*/ 

function sub(value , value2) {  // void ( vazia )
     console.log(value * value2)
     
}

sub(6,4)


function soma(valor, valor2) {    //Função retur - Retorna uma valor para quem chamou a função.
     let result = valor + valor2
     return result 
     
}
 console.log(soma(10,20) + " Resultado")