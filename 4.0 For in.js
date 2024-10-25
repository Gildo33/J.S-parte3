/*
    Estrutura de Repetição -LOP
           -FOR IN

*/

const users ={name:"Gildo" , age: 33 , street:"Av: Dr José maniero",number:11989506584}
  //console.log(users.number)   - 11989506584
  //console.log(users["number"]) -11989506584



for (const key in users) {
    console.log(key + " : " + users[key])
    

}

