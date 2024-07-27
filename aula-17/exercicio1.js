window.onload = function() {
    document.getElementById("buscar").addEventListener("click", sendRequest);
};

function sendRequest() {
    let endpoint = "https://jsonplaceholder.typicode.com/posts";
    let request = new XMLHttpRequest();
    let postNumber = document.getElementById("postNumber").value;

    request.onload = function() {
        let response = JSON.parse(this.responseText);
        let saida = document.getElementById("saida");
        saida.innerHTML = `<h1>${response.title}</h1>`;
        saida.innerHTML += `<p>${response.body}</p>`;
    }

    request.open("GET", `${endpoint}/${postNumber}`);
    request.send();
}