//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function incluiPlacar() {
    stroke(255);
    strokeWeight(1);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(128, 15, 40, 20);
    fill(255);
    strokeWeight(1);
    text(meusPontos, 150, 30);
    fill(color(255, 140, 0));
    strokeWeight(1);
    rect(425, 15, 40, 20);
    fill(255);
    text(pontosDoOponente, 445, 30);
    
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

