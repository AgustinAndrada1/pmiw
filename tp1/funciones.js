let cantdolar = 20;
function ciclofor( horizontal, vertical) {
  // rectangulos horizontales
  for (let RectHorizontal = 10; RectHorizontal<200; RectHorizontal+=horizontal) {
    line(400, RectHorizontal, 600, RectHorizontal);
    let y = map(RectHorizontal, 10, 200, 210, 400);
    line(600, y, 800, y);
    // limitar zona cuadro vertical 1 y 2
    let cuadroV1 =  mouseX > 600 && mouseX < 800 && mouseY > 0 && mouseY < 200 && distEllipse() > 120 ;
    let cuadroV2 =  mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400 && distEllipse() > 120 ;
    //efecto lineas en el cuadro vertical 1 y 2
    if (mouseIsPressed === true && mouseButton === RIGHT && cuadroV1===true) {
      line(600, RectHorizontal, 800, RectHorizontal);
    }
    if (mouseIsPressed === true && mouseButton === RIGHT && cuadroV2===true) {
      line(400, RectHorizontal+200, 600, RectHorizontal+200 );
    }
    // efecto "persiana negra"
    if ((keyIsPressed === true) &&  (key ==='a')) {
      RectHorizontal = RectHorizontal - 18;
    }
    // rectangulos verticales
    for (let RectVertical = 410; RectVertical<600; RectVertical+=vertical) {
      line(RectVertical, 200, RectVertical, 400);
      let x = map(RectVertical, 410, 600, 610, 800);
      line(x, 0, x, 200);

      // limitar zona cuadro horizontal 1 y 2
      let cuadroH1 =  mouseX > 400 && mouseX < 600 && mouseY > 0 && mouseY < 200 && distEllipse() > 120 ;
      let cuadroH2 =  mouseX > 600 && mouseX < 800 && mouseY > 200 && mouseY < 400  && distEllipse() > 120;

      //efecto lineas en el cuadro horizontal 1 y 2
      if (mouseIsPressed === true && mouseButton === RIGHT && cuadroH1 === true) {
        line(RectVertical, 10, RectVertical, 200);
      }
      if (mouseIsPressed === true && mouseButton === RIGHT && cuadroH2 === true) {
        line(RectVertical+200, 200, RectVertical+200, 400);
      }
      // efecto "persiana negra"
      if ((keyIsPressed === true) &&  (key === 's')) {
        RectVertical = RectVertical - 18;
      }
    }
  }
}
function cicloforEllipse() {
  for (let Ellipse = 220; Ellipse>40; Ellipse-=80) {
    ellipse(600, 200, Ellipse, Ellipse);
  }
}
function distEllipse() {
  let d = dist(mouseX, mouseY, 600, 200);//600,200 = x, y de la ellipse
  print(d);
  return d;
}
function encapsularRectangulo1() {
  let rectIzq = mouseX > 400 && mouseX< 600 && mouseY > 0 && mouseY < 400;
  return rectIzq;
}

function encapsularRectangulo2() {
  let rectDer = mouseX > 600 && mouseX < 800 && mouseY >0 && mouseY < 400;
  return rectDer;
}
function rectangulos() {
  if (mouseIsPressed === true  && mouseButton === LEFT && encapsularRectangulo1() === true) {

    let alto = dist(mouseY, 10, mouseY, mouseY); // efecto persiana blanca izquierda
    rect(410, 10, 180, alto);
  }
  if (mouseIsPressed === true && mouseButton === LEFT && encapsularRectangulo2() === true) {
    let alto2 = dist(mouseY, 10, mouseY, mouseY); // efecto persiana blanca derecha
    rect(609, 9, 181, alto2);
    print(alto2);
  }
}
function tablamultiplicacion( numero, numeromax) {
  let i = 0 ;
  for (i = 0; i <= numeromax; i+= numero) {
  let primernumero = i/numero;
    print(primernumero + "*" + numero + "=" + i);
  
}
  return i;
}
function dolarapesos(cantdolar, preciopesos) {
  return cantdolar * preciopesos;
}
