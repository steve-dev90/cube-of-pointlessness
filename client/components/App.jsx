import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Welcome from './Welcome'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'

const App = () => {

  return (
    <Router>
      <div >

        <Route exact path='/' component={Welcome}/>
        <Route exact path='/' component={WelcomeNav}/>
        <Route exact path='/cubes' component={SelectCube}/>

      </div>  
    </Router>
  )
}

export default App


