tyler = [];

function preload(){
  tyler = loadImage("images/tyler-3.jpg");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 5; i++) {
    let t = new tyler();
    tyler.push(t);
  }
  for (let i = tyler.length - 1; i >= 0; i--) {
    tyler[i].update();
    tyler[i].show();
    if (tyler[i].finished()) {
      // remove this particle
      tyler.splice(i, 1);
    }
  }
}

class tyler {

  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

}
