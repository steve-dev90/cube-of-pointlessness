import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const cubes = [{id: 1, name: 'Sine Cube', rating: 4},
          {id:2, name: 'Random Cube', rating: 3},
          {id:3, name: 'Yet Cube', rating: 2}]

const CubeNav = (props) => {

  //console.log(props.match.params.id)  

  return (
    <div className="list-cubes">
      <div className="container">

        {cubes.map(cube => {
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

export default CubeNav