import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
//import sketch from '../P5sketches/Protocube'
import sketch from '../P5sketches/Brown'
import Footer from './Footer';
import Header from './Header'


const SelectCube = (props) => {

  console.log(props.match.params.id) 
  
  return ( 
    <React.Fragment>
      <Header title={'props.title'} class={'header-section'} />
        <div className="cubecanvas">
          <div className="container">
            <div className="row">       
              <div className="twelve columns">
                <P5Wrapper sketch={sketch}/>
              </div>
            </div>
          </div>     
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default SelectCube