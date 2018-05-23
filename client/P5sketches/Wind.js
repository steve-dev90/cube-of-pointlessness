

function sketch (p) {

    var vector = [0,0,0]
 
    p.setup = function () {
      p.createCanvas(600, 600, p.WEBGL)
      vector[0] = -p.width/2
      console.log(vector[0]) 

    };
   

    //console.log('P5 brown', props.speed)
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      //If props.cubeSpeed is not null then assign to speed
    //   if (props.cubeSpeed) {
    //     console.log('P5 brown', props)
    //     speed = props.cubeSpeed
      //}
       
    }


    p.draw = function () {
  
      p.background(250)
      
      if (vector[0] < 0) {
         var ref = p.width - vector[0] 
      } else {
         var ref = p.width + vector[0]  
      } 
      var delta = 0.001 + 0.00005*ref+p.random(-0.001,0.00)
      vector[0] += delta
      //vector[1] = 0.002+ 0.005*vector[0]* vector[0]-0.001*vector[0]* vector[0]*vector[0]
      console.log(vector[0],vector[1])
      
      p.translate(vector[0], vector[1], vector[2]);
      p.rotateY(p.frameCount * 0.01)
      p.rotateZ(p.frameCount * 0.02)
         
      //p.specularMaterial('red')
  
      var c1 = p.frameCount % 255
  
      p.ambientLight(100);
      p.pointLight(250, 250, 250, 100, 100, 0);
      p.specularMaterial(c1, 102, 0, 50);
      //p.noStroke()
      
      p.box(50)
  
    }
  }
  
  
  export default sketch