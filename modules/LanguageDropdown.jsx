import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      languages: [
        'English',
        'Deutsch',
        'Español'
      ]
    }
  },
  onChangeLanguage(language) {
    const path = location.hash.replace(`#/${this.props.language}`, '')
    location.hash = language + path
  },
  render() {
    return (
      <div id="language-dd">
        <div ref="icon" id="language-dd-icon">
          {this.props.language}
        </div>
        <ul id="language-dd-list">
          <li onClick={() => this.onChangeLanguage('en')}>English</li>
          <li onClick={() => this.onChangeLanguage('de')}>Deutsch</li>
          <li onClick={() => this.onChangeLanguage('es')}>Español</li>
        </ul>
      </div>
    )
  }
})
