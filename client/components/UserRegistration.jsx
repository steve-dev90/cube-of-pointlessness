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
    e.preventDefault()              
    console.log(this.state)
    addUser(this.state)
    this.props.refreshUsers()
    //This resets the form so that the same placeholder's are displayed after reset
    this.refs.nameInput.value = 'Your name'
    this.refs.emailInput.value = "example@mailbox.com"
  }

  render () {
    return (
      <React.Fragment>
        <Header title={'Cube user registration'} class={'header-section'}
          classTitle={'title'} />

        <div className="user-form-section">

          <form id='userform'>
            <div className="row">
              <div className="six columns" >
                <label >Name</label>
                <input className="u-full-width button" name='name' placeholder='Your name' 
                  onChange={this.handleChange} ref='nameInput'/>
              </div>
              <div className="six columns" >
                <label >Your email</label>
                <input className="u-full-width button" name='email' 
                  placeholder="example@mailbox.com" onChange={this.handleChange}
                    ref='emailInput'/>
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

        <Footer />
      </React.Fragment>
    )
  }
 } 