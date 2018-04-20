import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubes} from '../api'


class CubeNav extends React.Component {

  constructor(props) {
    //console.log('Cubenav2 ren',props) 
    super(props)

    this.state = {
      cubes: []
    }

  }

  render(props) {
    //console.log('Cubenav ren',this.state.cubes, this.props.cubes)  
    return (
      <div className="list-cubes">
        <div className="container">

          {this.props.cubes.map((cube) => {
            
            return (
              <div className ="row" key={cube.id}>
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