/*
    ForEach(item,index,array)

Item  - Meu elemento individual
Index - Posiçao de cada item
Array - Meus elementos completo 

*/




let contact = [
    { name: "Gildo", age:33 , contacts: "(11) 98950-6584"},
    { name: "kamilly", age:11 ,contacts: "(11 98814-6762 "},
    { name: "leila", age:39 , contacts: "(11) 94927-9821"},
    { name: "Daniele", age:38 , contacts: "(11) 99654-0849"},
    { name: "Girleide", age:36 , contacts: "(11) 93227-4555"},

    ]

    contact.forEach((element,index) =>  {

        console.log(element,index)
        console.log(element.name)
        //console.log(index)
        //console.log(array)
        
    });



