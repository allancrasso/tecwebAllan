function calcularPeso(){
alert ("Você entrou no arquivo JS, \n Desenvolva seu algoritmo!");

const peso = parseFloat(document.getElementById("inppeso").value);

console.table (peso);

if (peso>50){

    excd = (peso -50);
    multa = (excd*4);
    alert ("A multa aplicada pelos quilos excedentes \n que foi de: "+ excd+"Kg\n é igual a R$ "+ multa.toFixed(2));
}
else{
    alert ("Não houve excesso de quilos pescados!")
}

}