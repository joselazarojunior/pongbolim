function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(34, 139, 34);
  mensagemNulab();
  mostraBolinha();
  movimentaBolinha();
  desenharRetangulo();
  desenharGrandeArea();
  desenharLinhaMeioCampo();
  desenharEscanteio();
  desenharMeioDeCampo();
  incluiPlacar();
  mostraImagem();
  mostraJogadores();
  movimentaJogadores();
  movimentaJogadoresOponentes();  
  
  verificaColisaoBorda();
  verificaColisaoJogadores();
    
  mostraGol(xMeuGol, yMeuGol);
  mostraGol(xOponenteGol, yOponenteGol);
  
  verificaMeuGol(xMeuGol, yMeuGol);
  verificaGolOpoente(xOponenteGol,yOponenteGol);
    
}




