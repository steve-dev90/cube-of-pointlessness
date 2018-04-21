
import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'



const WelcomeNav = () => {

  return (
    <div className="login-section">
 
      <div className="container">
        <div className ="row">
          <div className="one-third column value">
            <Link className="button" to="./cubes">Choose a cube</ Link>
          </div>
          <div className="one-third column value">
            <Link className="button" to="./users">Register user</ Link>  
          </div>
          <div className="one-third column value">
            <a className="button" href="./documentation">User documentation</a>   
          </div>
        </div>            
      </div>
    </div>  

  )
}

export default WelcomeNav