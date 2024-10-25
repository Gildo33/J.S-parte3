//Produtos acima de R$ 30,00 deve haver um desconto de 10%.

let cart = [100,79,29.90,470,590]         
let finalValue = 0

function calculatediscount (price,discount) {
       
    let result = (price * discount) / 100           //Desconto
    return result
}
cart.forEach(element => {
    
    if(element>30) {
        let discount = calculatediscount (element, 10) 
        finalValue = finalValue + (element-discount)
    }


    else {
        //finalValue +=element  (Uma forma de economiza código) 
        finalValue = finalValue + element                    //Soma
    }

});


console.log(" O valor da compra final foi de: R$ " + finalValue.toFixed(2)
,". Porém com valor do desconto,irá pagar R$ " + finalValue.toFixed(2),
".Você economizou: R$ " + finalValue.toFixed(2) )











                                             







