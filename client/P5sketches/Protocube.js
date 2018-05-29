//This P5 sketch moves a 3D cube in a sinusoidal fashion.
//The user can change the speed of the movement

function sketch (p) {
 
  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
  };
 
  //Initial cube speed
  var speed = 0.005
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    //If props.cubeSpeed is not null then assign to speed
    if (props.cubeSpeed) {
      console.log('P5 brown', props)
      speed = props.cubeSpeed
    }
  }

  p.draw = function () {

    p.background(250)
    p.rotateY(p.frameCount * 0.01)

      
    p.translate(p.sin(p.frameCount * speed) * 100, p.sin(p.frameCount * speed) * 100, p.sin(p.frameCount * speed));
    p.rotateZ(p.frameCount * 0.02)

    var c1 = p.frameCount % 255

    p.ambientLight(100);
    p.pointLight(250, 250, 250, 100, 100, 0);
    p.specularMaterial(c1, 102, 0, 50);
    
    p.box(50)

  }
}


export default sketch