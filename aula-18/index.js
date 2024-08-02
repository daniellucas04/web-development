window.onload = function() {
    document.getElementById('enviar').addEventListener('click', criarObjeto);
}

function criarObjeto() {
    let aluno = { nome: null, prontuario: null, idade: null }

    aluno.nome = document.getElementById('nome').value;
    aluno.prontuario = document.getElementById('prontuario').value;
    aluno.idade = document.getElementById('idade').value;

    console.log(aluno);
}