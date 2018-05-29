import React from 'react'

import {addCubeRating,getCubes} from '../api'

//This component is the cube rating form.

export default class AddRating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: this.props.users[0].id,
      cube_id: props.cube_id,
      rating: 1,
      name: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.addRating = this.addRating.bind(this)
  }

  //Add input data to this component's state
  handleChange (e) {
    if (e.target.name == 'name') {
      var user_id2 = this.props.users
        .find((user) => e.target.value == user.name)
        .id               
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
    //Post the cube rating to the database, update the site 
    //with the new cube data and then hide the form (as the user is done)
    e.preventDefault()              
    addCubeRating(this.state)
    this.props.refreshCubes()
    this.props.hideRatingForm()
  }

  render () {
    return (
      <div >
        <form>
          <p>
            <label>Name</label>
            <select className='button' name='name' onChange={this.handleChange}>
              {this.props.users.map(user => {
                return <option key={user.id} value={user.name}>{user.name}</option>
              })}
            </select>
          </p>
          <p>
            <label>Rating</label>
            <input className='button' placeholder='Rating' name='rating'
              onChange={this.handleChange}
              value={this.state.rating}/>
          </p>
          <p>
            <button className='button' type='button' onClick={this.addRating}>Add your rating</button>
          </p>
          <p>      
           <button className='button' type='button' onClick={this.props.hideRatingForm}>Cancel</button>
          </p>      
        </form>
      </div>
    )
  }
}