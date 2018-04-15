import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Header from './Header'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'
import Cube from './Cube'

const App = (props) => {
  

  return (
    <Router>
      <React.Fragment >
        <Route exact path='/' render={() => {
          return <Header title={'Cube of Pointlessness'} class={'welcome-header-section'} />
        }} />
        <Route exact path='/' component={WelcomeNav}/>
        <Route exact path='/cubes' component={SelectCube}/>
        <Route path='/cubes/:id' component={Cube}/>
        {/* Don't understand this - see https://til.hashrocket.com/posts/z8cimdpghg-passing-props-down-to-react-router-route */}
        <Route path='/cubes/:id' render={(routeProps) => {
          return <Cube title={'Random Cube'} {...routeProps} />
        }} />

      </React.Fragment>  
    </Router>
  )
}

export default App


