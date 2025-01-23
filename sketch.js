let system;

function setup() {
  createCanvas(500, 500);
  

  system = new ParticleSystem(0, 0);
  noCursor();

}

function draw() {
  background(150,175,0);
  
    // system.addParticle();
    system.run();
  
    //cursor('UFObig.png', 30, 50);
    fill(100, 20, 20, 20);
    noStroke();
    ellipse(mouseX,mouseY+15, 45, 20);
    fill(100);
    stroke(255);
    ellipse(mouseX,mouseY, 55, 30);
    fill(255);
    ellipse(mouseX,mouseY-5, 20, 15);
    fill(255);
    ellipse(mouseX,mouseY+8, 2, 2);
    ellipse(mouseX+12,mouseY+5, 3, 2);
    ellipse(mouseX-12,mouseY+5, 3, 2);

}