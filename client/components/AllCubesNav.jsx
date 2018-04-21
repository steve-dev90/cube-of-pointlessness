import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const AllCubesNav = (props) => {

  var cubesToShow = props.displayRatingsForAllUsers ? 
    props.cubes : props.cubesByUserID     
  //console.log({cubesToShow})     
  return (
    <React.Fragment>
      {cubesToShow.map((cube) => {
                
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
        })
      }
    </React.Fragment>
)
}

export default AllCubesNav