import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubes, getUsers} from '../api'


import Header from './Header'
import WelcomeNav from './WelcomeNav'
import SelectCube from './SelectCube'
import Cube from './Cube'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cubes: [],
      users: []
    }

    this.refreshCubes = this.refreshCubes.bind(this)
    this.renderCubes = this.renderCubes.bind(this)
    this.refreshUsers = this.refreshUsers.bind(this)
    this.renderUsers = this.renderUsers.bind(this)

  }  

  componentDidMount () {
    this.refreshCubes()
    this.refreshUsers()
  }

//Get cubes from DB
  refreshCubes (err) {
    this.setState({
      error: err,
    })
    getCubes(this.renderCubes)
  }

  renderCubes (err, cubes) {
    //console.log('cube',cubes)
    this.setState({
      error: err,
      cubes: cubes || []
    })
  }

//Get users from DB
refreshUsers (err) {
  this.setState({
    error: err,
  })
  getUsers(this.renderUsers)
}

renderUsers (err, Users) {
  console.log('app', users)
  this.setState({
    error: err,
    users: users || []
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
          
          <Route exact path='/cubes/:id' render={(props) => {
            return <Cube cubes={this.state.cubes} refreshCubes={this.refreshCubes} 
            users={this.state.users} {...props} />
          }} />

        </React.Fragment>  
      </Router>
    )
  } 
}


export default App


