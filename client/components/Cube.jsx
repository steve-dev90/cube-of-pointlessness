import React from 'react'
//Wrapper for P5.js
import P5Wrapper from 'react-p5-wrapper'
import sketch_1 from '../P5sketches/Protocube'
import sketch_2 from '../P5sketches/Brown'
import sketch_3 from '../P5sketches/Wind'
import Footer from './Footer'
import Header from './Header'
import AddRating from './AddRating'

//This component sets out the page for an individual cube

class Cube extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      addRatingForm: false,
      //Hard coded each P5 sketch to the cube_id
      sketch: {661: sketch_1, 662: sketch_2, 663: sketch_3},
      cubeSpeed: 0,
      cubeEffectToggle: false,
      soundControl: false

    }

    this.rateCubeButton = this.rateCubeButton.bind(this)
    this.hideRatingForm = this.hideRatingForm.bind(this)
    this.addCubeEffect = this.addCubeEffect.bind(this)

  }

  //Toggles on the cube rating form
  rateCubeButton () {
    this.setState({
      addRatingForm: true
    })
  }

  //Toggle off the cube rating form
  hideRatingForm () {
    this.setState({
      addRatingForm: false
    })  
  }

  //Toggle on/off the effects for the P5 sketches. These parameters
  //are passed through to the P5 sketch component as props  
  addCubeEffect () {
    var cubeEffectToggle = !(this.state.cubeEffectToggle)
    cubeEffectToggle 
    ?
    this.setState({ cubeSpeed: 0.1, cubeEffectToggle: cubeEffectToggle,
      soundControl: true }) 
    : 
    this.setState({ cubeSpeed: 0.005, cubeEffectToggle: cubeEffectToggle,
      soundControl: false })    
  }
  
  render(props) {
    
    //find the cube corresponding to the url id
    var cube = this.props.cubes
                  .find(cube => cube.id == this.props.match.params.id)
                   
    return ( 
      <React.Fragment>
        <Header title={cube.name} class={'header-section'} classTitle={'title'}/>
          <div className="cubecanvas">
            <div>
              <P5Wrapper sketch={this.state.sketch[this.props.match.params.id]}
                cubeSpeed={this.state.cubeSpeed} soundControl={this.state.soundControl}/>
            </div>  

            <div className='cube-buttons'> 
            
              {/* Button to show/hide the add cube rating form */}
              {!(this.state.addRatingForm) &&<p><button className='button' 
                onClick={this.rateCubeButton}> Rate Cube </button></p>}
                                    
              {this.state.addRatingForm && <AddRating cube_id={cube.id} 
                refreshCubes={this.props.refreshCubes} 
                hideRatingForm={this.hideRatingForm}
                users={this.props.users}/>}

              {/* Button to add/remove a cube effect */}
              <p><button className='button' onClick={this.addCubeEffect}> +/- Effect </button></p>                     
            </div>

          </div>        
        <Footer />
      </React.Fragment>
  )
  }
}

export default Cube