import React from 'react'

import Navigation from './Navigation'

export default React.createClass({
  render() {
    return (
      <div id='header'>
        <h1><img id='logo' src='images/Logo.png'/> Former</h1>
        <Navigation local={this.props.local} language={this.props.language}/>
      </div>
    )
  }
})
