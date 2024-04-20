function calculaMedia() {
    let nome = document.getElementById("nomeAluno").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        exibeResultado(nome, media, "Aprovado");
    } else {
        alert("Você não atingiu a média, porém ainda tem chances. \nInsira a nota da recuperação");
        solicitaRecuperacao(nome, media);
    }
}

function solicitaRecuperacao(nome, mediaInicial) {
    let rec = parseFloat(document.getElementById("rec").value);
    let mediaFinal = (rec + mediaInicial) / 2;

    if (mediaFinal >= 5) {
        exibeResultado(nome, mediaFinal, "Aprovado na recuperação");
    } else {
        exibeResultado(nome, mediaFinal, "Reprovado");
    }
}

function exibeResultado(nome, media, status) {
    document.getElementById("resultado").innerHTML = "O aluno " + nome + " obteve média = " + media.toFixed(2) + "\nResultado: " + status;
}
