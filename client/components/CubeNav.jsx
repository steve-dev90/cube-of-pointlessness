import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubes} from '../api'


class CubeNav extends React.Component {

  constructor(props) {
    console.log('Cubenav2 ren',props) 
    super(props)

    this.state = {
      cubes: []
    }

    // this.refreshCubes = this.refreshCubes.bind(this)
    // this.renderCubes = this.renderCubes.bind(this)

  }

  // componentDidMount () {
  //   this.refreshCubes()
  // }

  // refreshCubes (err) {
  //   this.setState({
  //     error: err,
  //   })
  //   getCubes(this.renderCubes)
  // }

  // renderCubes (err, cubes) {
  //   console.log('cubenav',cubes)
  //   this.setState({
  //     error: err,
  //     cubes: cubes || []
  //   })
  // }


  // componentWillReceiveProps(nextProps) {
  //   console.log("New Props", nextProps.cubes)
  //   this.setState({cubes: nextProps.cubes})
  // }
  

  render(props) {
    console.log('Cubenav ren',this.state.cubes, this.props.cubes)  
    return (
      <div className="list-cubes">
        <div className="container">

          {this.props.cubes.map((cube) => {
            
            return (
              <div className ="row">
                <div className="one-third column value">
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/100x100"/></a>
                </div>
                <div className="one-third column value">
                  <Link to={`/cubes/${cube.id}`}><h3>{cube.name}</h3></ Link> 
                </div>
                <div className="one-third column value">
                  <h3>{cube.rating}</h3>
                </div> 
            </div> 
            )    
          })}

        </div> 
      </div> 
    )  
  }
}

export default CubeNav