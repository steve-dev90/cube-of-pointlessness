import React from 'react'

//This component is a generic header for the site. Takes a CSS class name ('classTitle') 
//and title via props

const Header = (props) => {
  return (
    <div className={props.class}>
      <div className="container">
        <div className="row">       
          <div className="twelve columns">
            <h1 className={props.classTitle}>{props.title}</h1>
          </div>
        </div>
      </div>     
    </div>

  )
}

export default Header