//Definindo a dimensão do palco do jogo
var altura = 0
var largura = 0

//Definindo as variáveis responsáveis pelo funcionamento do jogo
var vidas = 1
var tempo = 10

//Recuperando o URL do App
var nivel = window.location.search
nivel = nivel.replace('?','')

//Definindo o tempo de criação do mosquito na tela
var criaMosquitoTempo = 1500

//Definindo níveis
if (nivel === 'facil') {
    //1500
    criaMosquitoTempo = 1500
} else if (nivel === 'normal') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'dificil'){
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura);
}
    
ajustaTamanhoPalcoJogo()

//Controlando o cronometro
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
        clearInterval(criaMosca)
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Criando posições randômicas
function posicaoRandomica() {

    //remove o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Controlando os pontos de vida
        if (vidas > 3) {
            window.location.href = 'gameover.html'
        } else {
            document.getElementById('v' + vidas).src = 'images/coracao_vazio.png'

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100
    console.log(posicaoX, posicaoY);

    if (posicaoX < 0) {
        posicaoX = 0
    }

    if (posicaoY < 0) {
        posicaoY = 0
    }

    //Criando o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'images/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

//Criando elementos com tamanhos randômicos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';
    
        case 2:
            return 'mosquito3';
    }
}

//Criando as imagens com lados diferentes
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}




