import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

//This component is a generic footer for the site

const Footer = (props) => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">       
          <div className="twelve columns">
            <Link className='banner-button' to='/' >Home</ Link>
          </div>
        </div>
      </div>     
    </div>

  )
}

export default Footer