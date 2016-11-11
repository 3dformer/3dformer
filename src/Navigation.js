import React from 'react'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const style = {
      fontSize: '1rem',
      listStyle: 'none',
      display: 'inline-flex',
      margin: 'auto 0',
      justifyContent: 'space-between',
      width: '300px'
    }
    const linkStyle = {
      color: '#FFF',
      textDecoration: 'none'
    }
    return (
      <ul style={style}>
        <li><a style={linkStyle} href='.'>Start</a></li>
        <li><a style={linkStyle} href='.'>Login</a></li>
        <li><a style={linkStyle} href='.'>Idee</a></li>
        <li><a style={linkStyle} href='.'>Wirklichkeit</a></li>
      </ul>
    )
  }
  componentDidMount() {
    this.setState(this.props)
  }
}
