function calculaMedia(){

    const nome  = document.getElementById("nomeAluno").value
    const nota1 = parseFloat(document.getElementById("nota1").value); // inputs
    const nota2 = parseFloat(document.getElementById("nota2").value); // inputs

    media = (nota1+nota2)/2; // Cálculo da minha variável de saída

    console.log(nota1);
    console.log(media); //mostra a variável de saída
    
    // Para aprovação considere média >= 7.0

    if (media>=7){
    
        alert ("O aluno "+ nome + " obteve média = "+ media+ "\n Resultado: "+ "Aprovado" );
       }

       else {
        alert ("O aluno "+ nome + " obteve média = "+ media+ "\n Resultado: "+ "Reprovado" );
       }
}