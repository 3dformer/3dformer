import React from 'react'

import Slider from './Slider'
import Scene from './Scene'

export default class Content extends React.Component {
  constructor() {
    super()
  }
  render() {
    const styles = {
      input: {
        padding: '10px 20px',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '100px',
        border: '0.5px solid #BBB',
        fontSize: '1.4em',
        margin: '40px 0px'
      },
      sliderContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '540px',
        margin: 'auto'
      }
    }

    const modelSliderList = [
      'car.jpg',
      'turtle.jpg',
      'star-wars.jpg'
    ]

    return (
      <div>
        <h2>3D Formen suchen und drucken lassen</h2>
        <input style={styles.input} type="text" placeholder="Suchen"/>
        <div style={styles.sliderContainer}>
          <Slider title="3D Formen" images={modelSliderList} />
          <Scene title="3D Drucker" />
        </div>
      </div>
    )
  }
}
