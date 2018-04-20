import React from 'react'

import {addCubeRating,getCubes} from '../api'

export default class AddRating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: 500,
      cube_id: props.cube_id,
      rating: 1,
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
          <p><input placeholder='User name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Rating' name='rating'
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