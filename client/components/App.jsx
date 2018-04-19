import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubes} from '../api'


import Header from './Header'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'
import Cube from './Cube'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cubes: [],
    }

    this.refreshCubes = this.refreshCubes.bind(this)
    this.renderCubes = this.renderCubes.bind(this)


  }  

  componentDidMount () {
    this.refreshCubes()
  }

  refreshCubes (err) {
    this.setState({
      error: err,
    })
    getCubes(this.renderCubes)
  }

  renderCubes (err, cubes) {
    console.log('cubenav',cubes)
    this.setState({
      error: err,
      cubes: cubes || []
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment >
          <Route exact path='/' render={() => {
            return <Header title={'Cube of Pointlessness'} class={'welcome-header-section'} />
          }} />
          <Route exact path='/' component={WelcomeNav}/>

          <Route exact path='/cubes' render={(props) => {
            return <SelectCube cubes={this.state.cubes} {...props} />
          }} />
          {/* Don't understand this - see https://til.hashrocket.com/posts/z8cimdpghg-passing-props-down-to-react-router-route */}
          <Route exact path='/cubes/:id' render={(props) => {
            return <Cube cubes={this.state.cubes} refreshCubes={this.refreshCubes} 
            {...props} />
          }} />

        </React.Fragment>  
      </Router>
    )
  } 
}


export default App


