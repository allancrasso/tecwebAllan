function calcularDesconto() {
    //let identificador de variáveis em âmbito local => VAR 
    let valorCompra = document.getElementById('valorCompra').value;
    valorCompra = parseFloat(valorCompra);

   
    if (valorCompra > 100) {
        let desconto = valorCompra * 0.1;  
        valorCompra -= desconto;  // descTotal = valorCompra - desconto        
        document.getElementById('resultado').innerHTML = "Valor com desconto: R$ " + valorCompra.toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = "Valor sem desconto: R$ " + valorCompra.toFixed(2);
        
    }
}