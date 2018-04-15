

function sketch (p) {
 
  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
    var x = 0 //does this centre the cube?

  };
  
  var vector = [0,0,0]

  p.draw = function () {

    var limits = [p.width/2, p.height/2, 200]

    vector = vector.map((i, v) => {
      if (i > limits[v]/2) {
        return i = limits[v]/2
      } else if (i < -limits[v]/2) {
        return i = -limits[v]/2
      } else {
        return i += p.random(-3, 3)
      }
    })
    
    //console.log('x',vector)

    p.background(250)
    
    p.rotateZ(p.frameCount * 0.02)  
    p.translate(vector[0], vector[1], vector[2]); //Should go first
    p.rotateX(p.frameCount * 0.02)
    p.rotateY(p.frameCount * 0.01)   
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