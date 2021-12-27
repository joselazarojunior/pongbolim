let xJogadores = [15, 325, 575, 255];
let yJogadores = [160, 160, 160, 160];
let jogadorComprimento = 8;
let jogadorAltura = 70;

let colidiu = false;

function mostraJogadores(){
   fill(color(131,111,255));
   for(let i = 0; i < xJogadores.length; i++){
      rect(xJogadores[i], yJogadores[i], jogadorComprimento, jogadorAltura);  
    if (i >= 1 ){
      fill(color(255,0,255));    
    }
  }
}

function movimentaJogadores(){
  if (keyIsDown(UP_ARROW)){
        if (yJogadores[0] > 15){
        yJogadores[0] -= 10;
        yJogadores[1] -= 10;          
        }
    
  }
  if (keyIsDown(DOWN_ARROW)){
        if (yJogadores[0] < 320){
        yJogadores[0] += 10;
        yJogadores[1] += 10;  
        }  
  }
    
}

function movimentaJogadoresOponentes(){
  if (keyIsDown(87)){
    if (yJogadores[2] > 15){
      yJogadores[2] -= 10;
      yJogadores[3] -= 10;        
    }
  }
  
  if (keyIsDown(83)){
    if (yJogadores[2] < 320){
      yJogadores[2] += 10;
      yJogadores[3] += 10;  
    }
  }
}

function verificaColisaoJogadores() {
  for(let i = 0; i < xJogadores.length; i++){
    colidiu = collideRectCircle(xJogadores[i], yJogadores[i], jogadorComprimento, jogadorAltura, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
    }
  }    
    
}


