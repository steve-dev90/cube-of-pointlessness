

function sketch (p) {
 
  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
  };
 
 
  p.draw = function () {

    p.background(250)
    p.rotateY(p.frameCount * 0.01)
      
    p.translate(p.sin(p.frameCount * 0.005) * 100, p.sin(p.frameCount * 0.005) * 100, p.sin(p.frameCount * 0.005));
    p.rotateZ(p.frameCount * 0.02)
       
    p.ambientMaterial(0, 1, .5, 0.2)
    //p.noStroke()
    
    p.box(50)

  }
}


export default sketch