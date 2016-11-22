import React from 'react'

export default React.createClass({
  render() {
    const local = this.props.local.login
    const debug = this.props.local.debug

    return (
      <div id='login-container' className='white-container'>
        <div id='login-split-container'>
          <div id='login-left'>
            <div>
            <a className="btn btn-block btn-social btn-google">
              <span className="fa fa-google"></span>{local.google}
            </a>
            </div>
            <div>
            <a className="btn btn-block btn-social btn-facebook">
              <span className="fa fa-facebook"></span>{local.facebook}
            </a>
            </div>
            <div>
            <a className="btn btn-block btn-social btn-twitter">
              <span className="fa fa-twitter"></span>{local.twitter}
            </a>
            </div>
            <div>
            <a className="btn btn-block btn-social btn-github">
              <span className="fa fa-github"></span>{local.github}
            </a>
            </div>
          </div>

          <div id='login-right'>
            <p>{local.title}</p>
            <p><input className='form-control' type='email' placeholder={local.username}/></p>
            <p><input className='form-control' type='password' placeholder={local.password}/></p>
            <p><a className="btn btn-primary">{local.signin}</a></p>
            <br/>
            <p>{local.noAccount} <a>{local.signupNow}</a></p>
          </div>
        </div>
      </div>
    )
  }
})
