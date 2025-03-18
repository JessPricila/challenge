let listaDeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();

    // Limpa o campo
    input.value = "";
    input.focus();
}

function atualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para realizar o sorteio!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Atualiza o resultado do sorteio na tela
    document.getElementById('resultado').innerHTML = `<p>🎉 O aluno sorteado é: <strong>${amigoSorteado}</strong>! 🎉</p>`;
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}
