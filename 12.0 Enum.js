/*
ENUMS - Facilita na idetificação do código ou na troca do mesmo.

let number1 = 0  -> Exemplo de variavel comum (Camel case)

let Gamer_Options = { Exemplo de variavel ENUMS (Snake case)
  PEDRA : "stone",
  Papel : "Paper",
  Tesoura: "scissors"
}

const PlayMachine = () => {                                //2° Funcion
      const Alternatives = [Gamer_Options.PEDRA,Gamer_Options.Papel ,Gamer_Options.Tesoura]
      const resultado1 = Math.floor(Math.random() * 3) 
      return Alternatives [resultado1 ]

}

Nessse exemplo a cima,criando-se a variavel Enums,
só necessita da trocada variavel.




*/ 