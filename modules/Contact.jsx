import React from 'react'

export default React.createClass({
  render() {
    const local = this.props.local.contact
    const debug = this.props.local.debug
    return (
      <div id='contact-container' className='white-container'>
        <h2>{local.title}</h2>
        <h4>{debug.coming}</h4>
      </div>
    )
  }
})
