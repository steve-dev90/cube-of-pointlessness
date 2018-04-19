import React from 'react'

import Header from './Header'
import CubeNav from './CubeNav'
import Footer from './Footer'

const SelectCube = (props) => {
  console.log('Select Cube', props.cubes)
  return (
    <React.Fragment>
      <Header title={'Select a cube'} class={'header-section'} />
      <CubeNav cubes={props.cubes} />
      <Footer />
    </React.Fragment>
  )
}

export default SelectCube