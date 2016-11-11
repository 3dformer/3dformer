import React from 'react'

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
      color: '#FFF',
      margin: '10px'

    }
    const copyrightStyle = {
      fontSize: '1rem',
      color: 'black',
      margin: '10px'
    }
    return (
      <div style={footerStyle}>
        <ul style={navStyle}>
          <li>Impressum</li>
          <li>Kontakt</li>
          <li>AGBs</li>
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
