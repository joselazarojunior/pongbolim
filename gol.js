//variáveis meu Gol
let xMeuGol = 0;
let yMeuGol = 150;
let meuGolComprimento = 8;
let meuGolAltura = 100;

//variáveis Gol Oponente
let xOponenteGol = 590;
let yOponenteGol = 150;
let OponenteGolComprimento = 10;
let OponenteGolAltura = 100;

function mostraGol(x, y){
  fill(color(255));
  rect(x, y, meuGolComprimento, meuGolAltura);
}

function verificaMeuGol(x, y) {
    colidiu = collideRectCircle(x, y, meuGolComprimento, meuGolAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha -= 1;
        ponto.play();
        pontosDoOponente += 1;
        xBolinha = 300;
        yBolinha = 200;
        
    }
}

function verificaGolOpoente(x, y){
  colidiu = collideRectCircle(x, y, OponenteGolComprimento, OponenteGolAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        ponto.play();
        meusPontos += 1;
        velocidadeXBolinha -= 1;
        xBolinha = 300;
        yBolinha = 200;
    }
}
