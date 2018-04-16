import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch_1 from '../P5sketches/Protocube'
import sketch_2 from '../P5sketches/Brown'
import Footer from './Footer';
import Header from './Header'


const Cube = (props) => {

  var sketch = [sketch_1, sketch_2]
  console.log(props.match.params.id) 
  
  return ( 
    <React.Fragment>
      <Header title={props.title} class={'header-section'} />
        <div className="cubecanvas">
          <div className="container">
            <div className="row">       
              <div className="twelve columns">
                <P5Wrapper sketch={sketch[props.match.params.id-1]}/>
              </div>
            </div>
          </div>     
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Cube