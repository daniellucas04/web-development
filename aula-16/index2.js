window.onload = function() {
    document.getElementById('comecar').addEventListener('click', comecar);
    document.getElementById('voltar').addEventListener('click', voltar);
}

let respostas = Array();
let tabuada = 1;
let posicaoExibida = -1;
let ultimoErrado = 0;

let input = document.createElement('input');
input.style = 'width:30px;margin-right:8px;';
input.id = 'resposta';

let button = document.createElement('button');
button.innerText = 'Responder';
button.id = 'responder';

function comecar() {
    const numero = Number(document.getElementById('numero').value);
    const saida = document.getElementById('saida');

    saida.innerHTML = `${numero} + ${tabuada} = `;
    saida.append(input);
    saida.append(button);
    
    document.getElementById('responder').addEventListener('click', continuar);
}

function continuar() {
    const numero = Number(document.getElementById('numero').value);
    const saida = document.getElementById('saida');
    let resposta = document.getElementById('resposta').value;

    respostas.push(resposta);
    mostrar();

    tabuada++;
    saida.innerHTML = `${numero} + ${tabuada} = `;
    saida.append(input);
    saida.append(button);
}

function mostrar() {
    const numero = Number(document.getElementById('numero').value);
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    respostas.forEach(function (atual, indice) {
        if((numero + (indice+1)) == atual) {
            tbody.innerHTML += `<tr><td>${numero} + ${indice+1} = ${atual}</td><td>V</td></tr>`;
        } else {
            ultimoErrado = indice;
            tbody.innerHTML += `<tr><td>${numero} + ${indice+1} = ${atual}</td><td>X</td></tr>`;
        }
    });
}

function voltar() {
    const saida = document.getElementById('saida');

    saida.innerHTML = respostas[ultimoErrado];
}