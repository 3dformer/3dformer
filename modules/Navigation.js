import React from 'react'
import { Link } from 'react-router'

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
        <li><Link style={linkStyle} to='/'>Start</Link></li>
        <li><Link style={linkStyle} to='/login'>Login</Link></li>
        <li><Link style={linkStyle} to='/idea'>Idee</Link></li>
        <li><Link style={linkStyle} to='/reality'>Wirklichkeit</Link></li>
      </ul>
    )
  }
  componentDidMount() {
    this.setState(this.props)
  }
}
