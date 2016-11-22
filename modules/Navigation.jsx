import React from 'react'
import { Link } from 'react-router'

import LanguageDropdown from './LanguageDropdown'

export default React.createClass({
  render() {
    const lang = this.props.language
    const navLocal = this.props.local.navigation

    return (
      <div id='header-nav-container'>
        <ul id='header-nav'>
          <li><Link to={'/' + lang + '/'}>{navLocal.home}</Link></li>
          <li><Link to={'/' + lang + '/login'}>{navLocal.signin}</Link></li>
          <li><Link to={'/' + lang + '/idea'}>{navLocal.idea}</Link></li>
          <li><Link to={'/' + lang + '/reality'}>{navLocal.reality}</Link></li>
        </ul>
        <LanguageDropdown language={lang}/>
      </div>
    )
  }
})
