import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {addUser} from '../api'

export default class UserRegistration extends React.Component {
  constructor (props) {
    super(props)
    this.state = {  
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addUser = this.addUser.bind(this)
  }


  handleChange (e) {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  addUser (e) {
    //api call for DB goes here
    e.preventDefault()              
    console.log(this.state)
    addUser(this.state)
    this.props.refreshUsers()
    document.getElementById('userform').reset()
    document.getElementById('email').reset()
  }

  render () {
    return (
      <React.Fragment>
        <Header title={'Cube user registration'} class={'header-section'} />

        <div className="user-form-section">

          <form id='userform'>
            <div className="row">
              <div className="six columns" >
                <label >Name</label>
                <input className="u-full-width" name='name' placeholder='Your name' 
                  onChange={this.handleChange} id='name-input'/>
              </div>
              <div className="six columns" >
                <label >Your email</label>
                <input className="u-full-width" name='email' 
                  placeholder="test@mailbox.com" onChange={this.handleChange}
                    id='email'/>
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">    
                <input className="button-primary" type="submit" value="Submit"
                  onClick={this.addUser} />
              </div>  
            </div> 
           
          </form>
        
        </div> 

      {/* <div >

        <form>
          <p>
            <select name='name' onChange={this.handleChange}>
              {this.props.users.map(user => {
                return <option key={user.id} value={user.name}>{user.name}</option>
              })}
            </select>
          </p>
          <p><input placeholder='Rating' name='rating'
            onChange={this.handleChange}
            value={this.state.rating}
          /></p>
          <button type='button' onClick={this.addRating}>Add your rating</button>
          <button type='button' onClick={this.props.hideRatingForm}>Cancel</button>

        </form> */}
        <Footer />
      </React.Fragment>
    )
  }
 } 