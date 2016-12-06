import React from 'react'
import { Link } from 'react-router'

import LanguageDropdown from './LanguageDropdown'

export default React.createClass({
  render() {
    const lang = this.props.language
    const navLocal = this.props.local.navigation

    const user = JSON.parse(localStorage.getItem('user'))

    let signinLink = (<li><Link to={'/' + lang + '/login'}>{navLocal.signin}</Link></li>)

    if (user) {
      signinLink = (<li><Link to={'/' + lang + '/profile'}>Account</Link></li>)
    }

    return (
      <div id='header-nav-container'>
        <ul id='header-nav'>
          <li><Link to={'/' + lang + '/'}>{navLocal.home}</Link></li>
          <li><Link to={'/' + lang + '/idea'}>{navLocal.idea}</Link></li>
          <li><Link to={'/' + lang + '/reality'}>{navLocal.reality}</Link></li>
          {signinLink}
        </ul>
        <LanguageDropdown language={lang}/>
      </div>
    )
  }
})
