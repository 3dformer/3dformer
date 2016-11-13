import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      background: 'orange'
    }
  }
  render() {
    const footerStyle = {
      width: '100%',
      background: this.state.background,
      textAlign: 'center',
      padding: '20px',
      position: 'fixed',
      bottom: '0'
    }
    const navStyle = {
      fontSize: '1rem',
      listStyle: 'none',
      display: 'inline-flex',
      margin: 'auto 0',
      justifyContent: 'space-between',
      width: '300px',
      margin: '10px'
    }
    const copyrightStyle = {
      fontSize: '1rem',
      color: 'black',
      margin: '10px',
      display: 'none'
    }
    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    }
    return (
      <div style={footerStyle}>
        <ul style={navStyle}>
          <li><Link style={linkStyle} to='/impressum'>Impressum</Link></li>
          <li><Link style={linkStyle} to='/contact'>Kontakt</Link></li>
          <li><Link style={linkStyle} to='/agbs'>AGBs</Link></li>
        </ul>
        <p style={copyrightStyle}>
          Copyright &copy; {new Date().getFullYear()} 3D Former Alle Rechte vorbehalten.
        </p>
      </div>
    )
  }
  componentDidMount() {
    this.setState(this.props)
  }
}
