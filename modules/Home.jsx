import React from 'react'

import Slider from './Slider'
import Scene from './Scene'

export default React.createClass({
  render() {
    const modelSliderList1 = [
      'car.jpg',
      'turtle.jpg',
      'star-wars.jpg'
    ]

    const modelSliderList2 = [
      'turtle.jpg',
      'star-wars.jpg',
      'car.jpg'
    ]

    const local = this.props.local.home

    return (
      <div id='home-container' className='container'>
        <h2>{local.header}</h2>
        <input type="text" placeholder={local.search}/>
        <div>
          <Slider title="3D Formen" images={modelSliderList1} />
          <Slider title="3D Formen" images={modelSliderList2} />
        </div>
      </div>
    )
  }
})
