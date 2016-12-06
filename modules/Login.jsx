import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  signin() {
    const email = this.refs.email.value
    const password = this.refs.password.value
    const signedIn = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      console.error(error.code, error.message);
    });

    const lang = this.props.language

    signedIn.then((user) => {
      if (user) {
        console.log('User sucessfully signed in')
        localStorage.setItem('user', JSON.stringify(user))
        window.location.hash = lang + '/profile'
      }
    }, (error) => {
      console.log('Error while creating user:', error)
    })
  },
  render() {
    const lang = this.props.language
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
            <p><input className='form-control' ref='email' type='email' placeholder={local.email}/></p>
            <p><input className='form-control' ref='password' type='password' placeholder={local.password}/></p>
            <p><button className="btn btn-primary" onClick={this.signin}>{local.signin}</button></p>
            <br/>
            <p>{local.noAccount} <Link to={'/' + lang + '/register'}>{local.signupNow}</Link></p>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount() {
    this.refs.email.focus();
  }
})
