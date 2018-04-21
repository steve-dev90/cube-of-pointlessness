import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubesByUserId} from '../api'
import AllCubesNav from './AllCubesNav';


class CubeNav extends React.Component {

  constructor(props) {
    //console.log('Cubenav2 ren',props) 
    super(props)

    this.state = {
      cubesByUserID: [],
      displayRatingsForAllUsers: true
    }

    this.selectUserButton = this.selectUserButton.bind(this)
    this.refreshCubesByUserId = this.refreshCubesByUserId.bind(this)
    this.renderCubesByUserId = this.renderCubesByUserId.bind(this)
  }

  refreshCubesByUserId (id, err) {
    //console.log('refresh',id)
    this.setState({
      error: err,
    })
    getCubesByUserId(this.renderCubesByUserId, id)
  }

  renderCubesByUserId (err, cubes) {
    console.log('cubeID',cubes)
    this.setState({
      error: err,
      cubesByUserID: cubes || []
    })
  }

  selectUserButton (e) {
    if (e.target.value == 'all users') {
      this.setState({
        displayRatingsForAllUsers : true
      })
    } else {
      this.setState({
        displayRatingsForAllUsers : false
      })
      var user_id = this.props.users
        .find((user) => e.target.value == user.name)
        .id
      console.log('User',user_id)                
      this.refreshCubesByUserId(user_id)
      console.log(this.state)
    }
  }

  render(props) {
    //console.log('Cubenav ren',this.state.cubes, this.props.cubes)  
    return (
      <div className="list-cubes">
        <div className="container">

        <AllCubesNav cubes={this.props.cubes} 
          cubesByUserID={this.state.cubesByUserID} 
          displayRatingsForAllUsers={this.state.displayRatingsForAllUsers} />

        <div className ="row">
          <form>
            <select name='name' onChange={this.selectUserButton}>
              <option value='all users'>Rating for all users</option>
              {this.props.users.map(user => {
                return <option key={user.id} value={user.name}>Rating for {user.name}</option>
              })}
            </select>
          </form> 
        </div>

        </div> 
      </div> 
    )  
  }
}

export default CubeNav