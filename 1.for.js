/*
Estrutura de Repetição - LOOP
    FOR
    1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela

    2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                Ele irá verificar antes de cada iteração.
    
    3) EXPRESSÃO FINAL - O que irá ocorrer acada vez que o nosso lado der uma volta.

    for ({Inicialização}; {condição}; {expressão final}){
     
      seu código aqui

  }

*/

/*

for(let i =0; i<10; i++) {
    console.log(i)
}

*/ 

const users = ["kamilly","Maria","Girleide","Daniele","Liliane","Leila"] //length(Tamanho do array,nesse caso é =4)

//users.length -> Tamanho do meu array
for(let i =0; i <users.length;i++) {
    console.log(users[i])

}



