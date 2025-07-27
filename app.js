let amigos = [];

function adicionarAmigos() {
    let entrada = document.querySelector("#amigo");
    let nome = entrada.value.trim();
    if (nome == '') {
        alert('Por Favor, Insira um nome válido.');
        return;
    }

    amigos.push(nome);
    entrada.value = '';
    atualizaAmigos();
    console.log(amigos);
}

function atualizaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    if (amigos.length == 0) {
        alert('Não há amigos para sortear');
        return;
    }

    let nomesAleatorios = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[nomesAleatorios];

    document.getElementById('resultado').innerHTML = `Amigo sorteado <strong>${nomeSorteado}</strong>`;
}

