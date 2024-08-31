//AGUSTÍN IGNACIO ANDRADA
//LEGAJO: 85192/9
//https://youtu.be/zreWGHgKSS4
let imagen;
function preload() {
  imagen = loadImage('data/F_25.jpg');
}
function setup() {
  createCanvas(800, 400);
  image(imagen, 0, 0);
}


function draw() {
  background(255);
  print(mouseX, mouseY);
  strokeWeight(20);
  strokeCap(SQUARE);
  image(imagen, 0, 0);
  ciclofor(40, 40);
  rectangulos();
  cicloforEllipse();
}

function keyPressed() {
  let red = random(0, 255);
  let green  = random(0, 255);
  let blue = random(0, 255);
  if ( (key ==='v') && distEllipse() <120) {  //120 = limite de la ellipse
    fill(red, green, blue, 100);
  } else if ( (key ==='c') && distEllipse() <120) {
    fill(red, green, blue, 255);
  } else {
    fill(255);
  }
  if (key === 'k') {
    tablamultiplicacion(7, 70);
  }
  if ( key === 'l') {

    print(cantdolar + " dolares son " + dolarapesos(20, 1305) + " pesos");
  }
}
