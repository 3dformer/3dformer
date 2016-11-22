import React from 'react'

export default React.createClass({
  render() {
    const local = this.props.local.idea

    const content = local.content.map((l) => l || '_b').join(' ').split(/ _b/)

    return (
      <div id='idea-container' className='white-container'>
        <h5>{local.title}</h5>
        {content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>
    )
  }
})
