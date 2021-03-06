import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getCubesByUserId} from '../api'
import AllCubesNav from './AllCubesNav';


class CubeNav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cubesByUserID: [],
      displayRatingsForAllUsers: true
    }

    this.selectUserButton = this.selectUserButton.bind(this)
    this.refreshCubesByUserId = this.refreshCubesByUserId.bind(this)
    this.renderCubesByUserId = this.renderCubesByUserId.bind(this)
  }
  
  //Get cube information, in particular ratings, by user ID
  refreshCubesByUserId (id, err) {
    this.setState({
      error: err,
    })
    getCubesByUserId(this.renderCubesByUserId, id)
  }

  renderCubesByUserId (err, cubes) {
    this.setState({
      error: err,
      cubesByUserID: cubes || []
    })
  }

  //This function determines the ratings to be displayed. If displayRatingsForAllUsers
  //is true, show rating for each cube averaged over all users. Otherwise find
  //the user_id of the selected user and show rating for each cube as 
  //provided by that user
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
      this.refreshCubesByUserId(user_id)
    }
  }

  render(props) { 
    return (
      <div className="list-cubes">
        <div className="container">

        <AllCubesNav cubes={this.props.cubes} 
          cubesByUserID={this.state.cubesByUserID} 
          displayRatingsForAllUsers={this.state.displayRatingsForAllUsers} />

        <div className ="row">
          <form>
            <select name='name' className="button" onChange={this.selectUserButton}>
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