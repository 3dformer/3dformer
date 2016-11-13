import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    const styles = {
      body: {
        background: 'url(images/background.png)',
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      content: {
        padding: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto',
      }
    }

    return (
      <div style={styles.body}>
        <Header background="#e74c3c"/>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <Footer background="#e74c3c"/>
      </div>
    )
  }
})
