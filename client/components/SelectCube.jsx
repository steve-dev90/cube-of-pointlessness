import React from 'react'

import Header from './Header'
import CubeNav from './CubeNav'
import Footer from './Footer'

//This component sets out the select cube page. 

const SelectCube = (props) => {

  return (
    <React.Fragment>
      <Header title={'Select a cube'} class={'header-section'}
        classTitle={'title'} />
      <CubeNav cubes={props.cubes} users={props.users}/>
      <Footer />
    </React.Fragment>
  )
}

export default SelectCube