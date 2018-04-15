import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Header from './Header'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'
import Cube from './Cube'

const App = () => {

  return (
    <Router>
      <React.Fragment >
        <Route exact path='/' render={() => {
          return <Header title={'Cube of Pointlessness'} class={'welcome-header-section'} />
        }} />
        <Route exact path='/' component={WelcomeNav}/>
        <Route exact path='/cubes' component={SelectCube}/>
        <Route path='/cubes/1' render={() => {
          return <Cube title={'Random Cube'}/>
        }} />

      </React.Fragment>  
    </Router>
  )
}

export default App


