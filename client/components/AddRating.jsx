import React from 'react'

import {addCubeRating,getCubes} from '../api'

export default class AddRating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: 500,
      cube_id: props.cube_id,
      rating: 1,
      name: "",
      //users: [{id: '551', name: 'Bob'}, {id: '552', name: 'Steve'}]
    }
    this.handleChange = this.handleChange.bind(this)
    this.addRating = this.addRating.bind(this)
  }


  handleChange (e) {
    console.log(this.props.users)
    if (e.target.name == 'name') {
      var user_id2 = this.props.users
        .find((user) => e.target.value == user.name)
        .id
      console.log(user_id2)                
      this.setState({
        user_id: user_id2
      })      
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  addRating (e) {
    //api call for DB goes here
    e.preventDefault()              
    console.log(this.state)
    addCubeRating(this.state)
      // .then(res => {
      //   console.log("HELLOOOOO34")
      //   this.props.refreshCubes()
      // })
    this.props.refreshCubes()
  }

  render () {
    return (
      <div >
        <form>
          <p>
            <select name='name' onChange={this.handleChange}>
              {this.props.users.map(user => {
                return <option value={user.name}>{user.name}</option>
              })}
            </select>
          </p>
          <p><input placeholder='Rating' name='rating'
            onChange={this.handleChange}
            value={this.state.rating}
          /></p>
          <button type='button' onClick={this.addRating}>Add your rating</button>
          <button type='button' onClick={this.props.hideRatingForm}>Cancel</button>

        </form>
      </div>
    )
  }
}