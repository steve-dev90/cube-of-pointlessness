function setup() {
  createCanvas(600, 600, WEBGL);
}

var x = 0
var y = 0
var z = 0
var s = 0.01

function draw() {
  background(250);
  rotateY(frameCount * 0.01);
  

  //color(255, 0, 0, 0.2 * 255);
  translate(sin(frameCount * 0.005) * 100, sin(frameCount * 0.005) * 100, sin(frameCount * 0.005));
  rotateZ(frameCount * 0.02);
   
  // fill('rgb(100%,0%,10%)')
  // translate(x,y,z)// should go first to avoid rotation around axis
  // rotateX(frameCount * 0.05);
  // rotateY(frameCount * 0.05);
  //translate(x,y,z)
  //rotate(frameCount * 0.01,1)
  
  //scale(x*s,y*s,z*s)
  // x += 0.1
  // y += 0.1
  // z += 0.0
    
  // var dirX = (mouseX / width - 0.5) * 2;
  // var dirY = (mouseY / height - 0.5) * 2;
  // pointLight(250, 250, 250, -dirX, -dirY, 0.8);
  ambientMaterial(0, 1, .5, 0.2);
  noStroke()

  console.log('x: '+ x + ' y: ' + y + ' z: ' + z)

  box(50);
  //translate()
  //x += 1
  
}
