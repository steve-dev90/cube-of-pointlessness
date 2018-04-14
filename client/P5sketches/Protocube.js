

function sketch (p) {
 
  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
  };
 
 
  p.draw = function () {

    p.background(250)
    p.rotateY(p.frameCount * 0.01)
      
    p.translate(p.sin(p.frameCount * 0.005) * 100, p.sin(p.frameCount * 0.005) * 100, p.sin(p.frameCount * 0.005));
    p.rotateZ(p.frameCount * 0.02)
       
    p.specularMaterial('red')

    var c1 = p.frameCount % 255

    p.ambientLight(100);
    p.pointLight(c1, 250, 250, 100, 100, 0);
    p.specularMaterial(204, 102, 0, 50);
    //p.noStroke()
    
    p.box(50)

  }
}


export default sketch