//Import the p5.js sound library
import p5 from 'p5'
import 'p5/lib/addons/p5.sound'

function sketch (p) {

  var song, analyzer
  var vector = [0,0,0]
  var soundControl = false

  p.preload = function () {
    song = p.loadSound('/sounds/sound2.wav')
  }  

  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
    
    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude()

    // Patch the input to an volume analyzer
    analyzer.setInput(song);

  }
  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      soundControl = props.soundControl
  }

  p.draw = function () {

    if (soundControl) {
      song.play()
    } else {
      song.stop()
    }

    //Limit the travel of the cube
    var limits = [p.width/2, p.height/2, 200]

    vector = vector.map((i, v) => {
      if (i > limits[v]) {
        return i = limits[v]
      } else if (i < -limits[v]) {
        return i = -limits[v]
      } else {
        return i += p.random(-3, 3)
      }
    })

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
    
    //Get amplitude and vary cube size by amplitude
    var rms = analyzer.getLevel();
    p.box(20 + rms*100)

  }
}


export default sketch