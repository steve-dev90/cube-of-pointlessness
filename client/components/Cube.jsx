import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch_1 from '../P5sketches/Protocube'
import sketch_2 from '../P5sketches/Brown'
import Footer from './Footer';
import Header from './Header'


class Cube extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      addRatingForm: false,
      sketch: [sketch_1, sketch_2],
      title: props.title,
      sketch_id: (props.match.params.id-1)
    }

    this.rateCubeButton = this.rateCubeButton.bind(this)

  }

  rateCubeButton () {
    console.log('heeeeloooo')
    this.setState({
      addRatingForm: true
    })

  }
  
  render() {
    
    return ( 
      <React.Fragment>
        <Header title={this.state.title} class={'header-section'} />
          <div className="cubecanvas">
            <div className="container">
              <div className="row">       
                <div className="twelve columns">
                  <P5Wrapper sketch={this.state.sketch[this.state.sketch_id]}/>
                  <button onClick={this.rateCubeButton}> Rate Cube </button>
                  {this.state.addRatingForm && <RateCube />}
                </div>
              </div>
            </div> 
          </div>        
        <Footer />
      </React.Fragment>
  )
  }
}

export default Cube