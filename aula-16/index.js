let alunos = Array();
let posicaoExibida = -1;

window.onload = function () {
    document.getElementById('salvar').addEventListener('click', salvar);
    document.getElementById('mostrar').addEventListener('click', mostrar);
    document.getElementById('anterior').addEventListener('click', anterior);
    document.getElementById('proximo').addEventListener('click', proximo);
}

function salvar() {
    const campoNome = document.getElementById('nome');

    if(posicaoExibida == -1) {
        alunos.push(campoNome.value);
    } else {
        atualizar();
    }

    campoNome.value = '';
}

function mostrar() {
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    alunos.forEach(function (atual, index) {
        tbody.innerHTML += `<tr><td>${index + 1}</td><td>${atual}</td></tr>`;
    });
}

function anterior() {
    const campoNome = document.getElementById('nome');

    if(posicaoExibida == 0 || posicaoExibida == -1) {
        posicaoExibida = alunos.length - 1;
    } else {
        posicaoExibida -= 1;
    }

    campoNome.value = alunos[posicaoExibida];
}

function proximo() {
    const campoNome = document.getElementById('nome');

    if(posicaoExibida == alunos.length -1) {
        posicaoExibida = 0;
    } else {
        posicaoExibida += 1;
    }

    campoNome.value = alunos[posicaoExibida];
}

function atualizar() {
    const campoNome = document.getElementById('nome');
    alunos[posicaoExibida] = campoNome.value;

    campoNome.value = '';
}