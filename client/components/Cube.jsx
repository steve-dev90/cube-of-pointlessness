import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch_1 from '../P5sketches/Protocube'
import sketch_2 from '../P5sketches/Brown'
import sketch_3 from '../P5sketches/Wind'
import Footer from './Footer'
import Header from './Header'
import AddRating from './AddRating'


class Cube extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      addRatingForm: false,
      sketch: {661: sketch_1, 662: sketch_2, 663: sketch_3},
      cubeSpeed: 0,
      cubeEffectToggle: false,
      soundControl: false

    }

    this.rateCubeButton = this.rateCubeButton.bind(this)
    this.hideRatingForm = this.hideRatingForm.bind(this)
    this.addCubeEffect = this.addCubeEffect.bind(this)

  }

  rateCubeButton () {
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
    cubeEffectToggle 
    ?
    this.setState({ cubeSpeed: 0.1, cubeEffectToggle: cubeEffectToggle,
      soundControl: true }) 
    : 
    this.setState({ cubeSpeed: 0.005, cubeEffectToggle: cubeEffectToggle,
      soundControl: false })    
  }
  
  render(props) {
    
    var cube = this.props.cubes
                  .find(cube => cube.id == this.props.match.params.id)
                   
    return ( 
      <React.Fragment>
        <Header title={cube.name} class={'header-section'} classTitle={'title'}/>
          <div className="cubecanvas">
          <div>
            {/* <div className="container">
              <div className="row">  

                <div className="six columns"> */}
                  <P5Wrapper sketch={this.state.sketch[this.props.match.params.id]}
                    cubeSpeed={this.state.cubeSpeed} soundControl={this.state.soundControl}/>
                </div>  

                {/* <div className='six columns'> */}
                  <div className='cube-buttons'> 

                  {!(this.state.addRatingForm) &&<p><button className='button' 
                    onClick={this.rateCubeButton}> Rate Cube </button></p>}
                                  
                  {this.state.addRatingForm && <AddRating cube_id={cube.id} 
                    refreshCubes={this.props.refreshCubes} 
                    hideRatingForm={this.hideRatingForm}
                    users={this.props.users}/>}

                  <p><button className='button' onClick={this.addCubeEffect}> +/- Effect </button></p> 
                  
                  </div>
                  {/* </div> */}
                {/* </div>  */}

                
              {/* </div>
            </div>  */}
          </div>        
        <Footer />
      </React.Fragment>
  )
  }
}

export default Cube