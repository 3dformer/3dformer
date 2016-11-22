import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    const language = this.props.params.language
    const local = this.props.route.locals[language]

    return (
      <div>
        <Header local={local} language={language}/>
        <div id='content'>
          {
            React.cloneElement(this.props.children, {local})
          }
        </div>
        <Footer local={local} language={language}/>
      </div>
    )
  }
})
