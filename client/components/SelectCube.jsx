import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
//import sketch from '../P5sketches/Protocube'
import sketch from '../P5sketches/Brown'

const SelectCube = () => {
  return (
    <div>
      <P5Wrapper sketch={sketch}/>
    </div>
  )
}

export default SelectCube