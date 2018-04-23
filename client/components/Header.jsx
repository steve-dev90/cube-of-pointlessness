import React from 'react'

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