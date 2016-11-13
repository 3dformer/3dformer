import React from 'react'

import Navigation from './Navigation'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '3D Former',
      background: 'orange'
    }
  }
  render() {
    const style = {
      background: this.state.background,
      textAlign: 'left',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
    }
    return (
      <div style={style}>
        <h1>{this.state.title}</h1>
        <Navigation/>
      </div>
    )
  }
  componentDidMount() {
    this.setState(this.props)
  }
}
