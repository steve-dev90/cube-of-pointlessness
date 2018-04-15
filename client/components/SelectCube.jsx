import React from 'react'

import Header from './Header'
import CubeNav from './CubeNav'
import Footer from './Footer'

const SelectCube = () => {
  return (
    <React.Fragment>
      <Header title={'Select a cube'} class={'header-section'} />
      <CubeNav />
      <Footer />
    </React.Fragment>
  )
}

export default SelectCube