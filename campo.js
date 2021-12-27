function desenharRetangulo(){
  strokeWeight(4);
  stroke(255);
  noFill();
  beginShape();
  vertex(8, 8);
  vertex(590, 8);
  vertex(590, 390);
  vertex(8, 390);
  endShape(CLOSE);
  
}

function desenharLinhaMeioCampo(){
  stroke(255);
  beginShape(LINES);
  vertex(295, 8);
  vertex(295, 390);
  endShape();
}

function desenharGrandeArea(){
      
  stroke(255)
  noFill();
  beginShape();
    vertex(8, 97);
    vertex(100, 97)
    vertex(100, 291);
    vertex(8, 291)
    
  
    arc(100, 194, 50, 50, 3*PI/2, PI/2);
  endShape();
  
  beginShape();
    vertex(8, 145);
    vertex(50, 145)
    vertex(50, 250);
    vertex(8, 250)
  endShape();
  
  beginShape();
  
    vertex(590, 97);
    vertex(500, 97)
    vertex(500, 291);
    vertex(590, 291)
  
    arc(500, 194, 50, 50, PI/2, 3*PI/2);
  endShape();
  
  beginShape();
    vertex(590, 145);
    vertex(550, 145)
    vertex(550, 250);
    vertex(590, 250)
  endShape();
}

function desenharEscanteio(){
  stroke(255);    
  arc(8, 8, 50, 50, 0, HALF_PI);
  arc(590, 8, 50, 50, PI/2, PI );  
  arc(8, 390, 50, 50, 3*PI/2, 0);
  arc(590, 390, 50, 50, PI, 3*PI/2);
  
}

function desenharMeioDeCampo(){
  stroke(255)
  ellipse(295, 192, 80, 80);
  strokeWeight(10);
  point(295,192);
  point(75,192);
  point(525,192);
}

