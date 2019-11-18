let offset = 0;
let tylerImage;
let tyler = [];


function preload(){
tyler1 = loadImage("images/tyler-3.jpg");
tyler2 = loadImage("images/tyler-4.jpg");
}
function setup(){
createCanvas(1378,700);
for(let i = 0; i < 100; i++){
//let x = random(width);
//let y = random(height);
tyler.push(new Boid ());}
//(x, y, random(5), speed, 2)
}

function draw(){

background(165, 255, 160);
tint(255, 127); // Display at half opacity
  //image(eyeImage2, offset, 0);

tyler2.resize(1000,800)
image(tyler2,209,-20);

noTint();
for (let boid of tyler){
boid.tyler(tyler);
  boid.display();
boid.update();
tyler1.resize(100, 70);


}




}