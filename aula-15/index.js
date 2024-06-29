// let carro = {
    // marca: 'Volkswagen',
    // modelo: 'Fusca',
    // ano: 1967,
    // cor: 'Preto',
    // velocidade: 0,
    // acelerar() { this.velocidade += 10; },
    // frear() { this.velocidade -= 5; }
// };

let carros = [];

function Carro(marca, modelo, ano, cor, velocidade) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.velocidade = velocidade;
}

function showObject(object) {
    let marca = document.getElementById('marca');
    let modelo = document.getElementById('modelo');
    let ano = document.getElementById('ano');
    let cor = document.getElementById('cor');
    let velocidade = document.getElementById('velocidade');

    marca.value = object.marca;
    modelo.value = object.modelo;
    ano.value = object.ano;
    cor.value = object.cor;
    velocidade.value = object.velocidade;
}

function accelerate() {
    let velocidade = document.getElementById('velocidade')
    carro.acelerar();
    velocidade.value = carro.velocidade; 
}

function slowdown() {
    let velocidade = document.getElementById('velocidade');
    if(carro.velocidade > 0) {
        carro.frear();
    }
    velocidade.value = carro.velocidade; 
}

function updateCar() {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let ano = document.getElementById('ano').value;
    let cor = document.getElementById('cor').value;
    let velocidade = document.getElementById('velocidade').value;
    
    carro.marca = marca;
    carro.modelo = modelo;
    carro.ano = ano;
    carro.cor = cor;
    carro.velocidade = velocidade;

    document.getElementById('resultado').innerHTML = 'Carro atualizado, confira no console!';
    console.table(carro);
}

function saveCar() {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let ano = document.getElementById('ano').value;
    let cor = document.getElementById('cor').value;
    let velocidade = document.getElementById('velocidade').value;

    let carro = new Carro(marca, modelo, ano, cor, velocidade);
    carros.push(carro);
    console.log(carros);
}

function previousCar() {
    showCar(carros, 0);
}

function nextCar() {

}

/** 
 * @param Array array = array com carros 
*/
function showCar(car, index) {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let ano = document.getElementById('ano').value;
    let cor = document.getElementById('cor').value;
    let velocidade = document.getElementById('velocidade').value;

    marca.value = car[index].marca;
    modelo.value = car[index].modelo;
    ano.value = car[index].ano;
    cor.value = car[index].cor;
    velocidade.value = car[index].velocidade;
}

window.onload = function() {
    document.getElementById('voltar').addEventListener('click', previousCar);
    document.getElementById('salvar').addEventListener('click', saveCar);
    document.getElementById('proximo').addEventListener('click', nextCar);
}