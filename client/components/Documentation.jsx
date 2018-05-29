import React from 'react'

import Header from './Header'
import Footer from './Footer'

//This component provides, the not particularly serious, user documentation for the site. 

const Documentation = () => {

  return (
    <React.Fragment>
      <Header title={'User Documentation'} class={'header-section'}
        classTitle={'title'} />
      <div className='documentation-section'>
        <div className="container">
          <div className="row">       
            <div className="twelve columns">
              <p>The boy stood on the burning deck</p>
              <p>His lips were all a-quiver</p>
              <p>He gave a cough, his leg fell off</p>
              <p>And floated down the river.</p>
              <p> - Eric Morecambe </p>
            </div>
          </div>
        </div>     
      </div>
      <Footer />
    </React.Fragment>

  )
}

export default Documentation