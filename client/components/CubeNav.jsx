import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const cubes = [{name: 'Sine Cube', rating: 4},
          {name: 'Random Cube', rating: 3},
          {name: 'Yet Cube', rating: 2}]

const CubeNav = () => {

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
               <h3>{cube.name}</h3>  
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