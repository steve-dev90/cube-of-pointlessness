import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubes} from '../api'

const cubes_data = [{id: 1, name: 'Sine Cube', rating: 4},
          {id:2, name: 'Random Cube', rating: 3},
          {id:3, name: 'Yet Cube', rating: 2}]

class CubeNav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cubes: cubes_data,
    }

    this.refreshCubes = this.refreshCubes.bind(this)
    this.renderCubes = this.renderCubes.bind(this)


  }

  componentDidMount () {
    this.refreshCubes()
  }

  refreshCubes (err) {
    this.setState({
      error: err,
    })
    getCubes(this.renderCubes)
  }

  renderCubes (err, cubes) {
    console.log('cubenav',cubes)
    this.setState({
      error: err,
      cubes: cubes || []
    })
  }

  //console.log(props.match.params.id)  

  render() {
    return (
      <div className="list-cubes">
        <div className="container">

          {this.state.cubes.map(cube => {
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