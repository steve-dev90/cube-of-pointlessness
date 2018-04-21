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
      cubeSpeed: 0,
      cubeEffectToggle: false

    }

    this.rateCubeButton = this.rateCubeButton.bind(this)
    this.hideRatingForm = this.hideRatingForm.bind(this)
    this.addCubeEffect = this.addCubeEffect.bind(this)

  }

  rateCubeButton () {
    //console.log('heeeeloooo')
    this.setState({
      addRatingForm: true
    })
  }

  hideRatingForm () {
    this.setState({
      addRatingForm: false
    })  
  }

  addCubeEffect () {
    var cubeEffectToggle = !(this.state.cubeEffectToggle)
    console.log(cubeEffectToggle)
    cubeEffectToggle 
    ?
    this.setState({ cubeSpeed: 0.1, cubeEffectToggle: cubeEffectToggle  }) 
    : 
    this.setState({ cubeSpeed: 0.005, cubeEffectToggle: cubeEffectToggle })    
  }
  
  render(props) {
    
    var cube = this.props.cubes
                  .find(cube => cube.id == this.props.match.params.id)
                  
    //console.log('CUBES',cube)  
    return ( 
      <React.Fragment>
        <Header title={cube.name} class={'header-section'} />
          <div className="cubecanvas">
            <div className="container">
              <div className="row">       
                <div className="twelve columns">
                  <P5Wrapper sketch={this.state.sketch[this.props.match.params.id]}
                    cubeSpeed={this.state.cubeSpeed}/>
                  
                  <button onClick={this.rateCubeButton}> Rate Cube </button>

                  {this.state.addRatingForm && <AddRating cube_id={cube.id} 
                    refreshCubes={this.props.refreshCubes} 
                    hideRatingForm={this.hideRatingForm}
                    users={this.props.users}/>}

                  <button onClick={this.addCubeEffect}> +/- Effect </button>  

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