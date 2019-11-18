var particles = [];

function setup(){
  createCanvas(1000, 700);
  background(0, 255, 0);
}

function mousePressed(){
  for(var i = 0; i < 10; i++) {
    var x = random(width)
    var y = random(height);
    var z = 100;
    particles[i] = new Particle(x, y, z);
  }

}

function draw() {
  for(var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

function Particle(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = random();

  this.move = function() {
    this.x += this.speed

  };

  this.display = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, this.diameter);
  };

}