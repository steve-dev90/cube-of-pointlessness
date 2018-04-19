import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch_1 from '../P5sketches/Protocube'
import sketch_2 from '../P5sketches/Brown'
import Footer from './Footer'
import Header from './Header'
import AddRating from './AddRating'


class Cube extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      addRatingForm: false,
      sketch: {661: sketch_1, 662: sketch_2, 663: sketch_2},
      //sketch_id: (props.match.params.id-1)
    }

    this.rateCubeButton = this.rateCubeButton.bind(this)
    this.hideRatingForm = this.hideRatingForm.bind(this)

  }

  rateCubeButton () {
    console.log('heeeeloooo')
    this.setState({
      addRatingForm: true
    })
  }

  hideRatingForm () {
    this.setState({
      addRatingForm: false
    })  
  }
  
  render(props) {
    
    var title = this.props.cubes
                  .find(cube => cube.id == this.props.match.params.id)
                  .name
    console.log('CUBES',title)  
    return ( 
      <React.Fragment>
        <Header title={title} class={'header-section'} />
          <div className="cubecanvas">
            <div className="container">
              <div className="row">       
                <div className="twelve columns">
                  <P5Wrapper sketch={this.state.sketch[this.props.match.params.id]}/>
                  <button onClick={this.rateCubeButton}> Rate Cube </button>
                  {this.state.addRatingForm && <AddRating 
                    hideRatingForm={this.hideRatingForm}/>}
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