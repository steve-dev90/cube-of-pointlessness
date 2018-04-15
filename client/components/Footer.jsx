import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">       
          <div className="twelve columns">
            <Link to='/' >Home</ Link>
          </div>
        </div>
      </div>     
    </div>

  )
}

export default Footer