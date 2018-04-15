import React from 'react'

import Header from './Header'
import CubeNav from './CubeNav'

const SelectCube = () => {
  return (
    <React.Fragment>
      <Header title={'Select a cube'} class={'header-section'} />
      <CubeNav />
    </React.Fragment>
  )
}

export default SelectCube