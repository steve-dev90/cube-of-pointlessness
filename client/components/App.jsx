import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Header from './Header'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'

const App = () => {

  return (
    <Router>
      <div >
        <Route exact path='/' render={() => {
          return <Header title={'Cube of Pointlessness'} class={'welcome-header-section'} />
        }} />
        <Route exact path='/' component={WelcomeNav}/>
        <Route exact path='/cubes' component={SelectCube}/>

      </div>  
    </Router>
  )
}

export default App


