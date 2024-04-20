function classificaIdade() {
    
    let idade = document.getElementById("idade").value;

   
    idade = parseInt(idade);

  
    let resultado = document.getElementById("resultado");

    
    if (idade <= 12) {
        resultado.innerHTML = "Classificação: Criança";
    } else if (idade > 12 && idade <= 18) {
        resultado.innerHTML = "Classificação: Adolescente";
    } else if (idade > 18 && idade <= 65) {
        resultado.innerHTML = "Classificação: Adulto";
    } else {
        resultado.innerHTML = "Classificação: Idoso";
    }
}