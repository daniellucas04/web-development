window.onload = () => {
    document.getElementById("buscar").addEventListener("click", findCEP);
}

function findCEP() {
    let endpoint = 'https://viacep.com.br/ws';
    let cep = formatCEP(document.getElementById('cep').value);
    let request = new XMLHttpRequest();

    request.open("GET", `${endpoint}/${cep}/json`);
    request.send();

    request.onload = function() {
        let response = JSON.parse(this.responseText);
        let rua = document.getElementById("rua");
        let bairro = document.getElementById("bairro");
        let cidade = document.getElementById("cidade");
        let estado = document.getElementById("estado");

        rua.value = response.logradouro;
        bairro.value = response.bairro
        cidade.value = response.localidade
        estado.value = response.uf
    }
}

function formatCEP(cep) {
    return String(cep).replace('-', '').replace('.', '');
}