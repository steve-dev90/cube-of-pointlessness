
import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'



const WelcomeNav = () => {

  return (
    <div class="login-section">
 
      <div class="container">
        <div class ="row">
          <div class="one-third column value">
            <Link class="button" to="./cubes">Choose a cube</ Link>
          </div>
          <div class="one-third column value">
            <a class="button" href="./users/new">Register user</a>  
          </div>
          <div class="one-third column value">
            <a class="button" href="./documentation">User documentation</a>   
          </div>
        </div>            
      </div>
    </div>  

  )
}

export default WelcomeNav