import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    const lang = this.props.language
    const navLocal = this.props.local.navigation

    return (
      <div id='footer'>
        <ul id='footer-nav'>
          <li><Link to={'/' + lang + '/impressum'}>{navLocal.impressum}</Link></li>
          <li><Link to={'/' + lang + '/contact'}>{navLocal.contact}</Link></li>
          <li><Link to={'/' + lang + '/terms'}>{navLocal.terms}</Link></li>
        </ul>
      </div>
    )
  }
})
