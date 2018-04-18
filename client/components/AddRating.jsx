import React from 'react'

//import {appendWidget} from '../api'

export default class AddRating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_name: '',
      user_id: 0,
      cube_id: 0,
      cube_rating: 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.addRating = this.addRating.bind(this)
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addRating (e) {
    //api call for DB goes here
    console.log(this.state)
  }

  render () {
    return (
      <div >
        <form>
          <p><input placeholder='User name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Rating' name='cube_rating'
            onChange={this.handleChange}
            value={this.state.cube_rating}
          /></p>
          <button type='button' onClick={this.addRating}>Add your rating</button>
          <button type='button' onClick={this.props.hideRatingForm}>Cancel</button>

        </form>
      </div>
    )
  }
}