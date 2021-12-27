//sons do jogo
let raquetada;
let ponto;
let trilha;

//imagem
let imagemAluraNu;

function preload() {
    trilha = loadSound("sons/trilha.mp3");
    ponto = loadSound("sons/ponto.mp3");
    raquetada = loadSound("sons/raquetada.mp3");
    
    imagemAluraNu = loadImage("alura_nu.png");
}

