import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  signup() {
    const username = this.refs.username.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const signedUp = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.error(error.code, error.message);
    });

    const lang = this.props.language

    signedUp.then((user) => {
      if (user) {
        console.log('New user sucessfully created')
        user.updateProfile({
          displayName: username
        }).then(function() {
          console.log('New user sucessfully updated')
          localStorage.setItem('user', JSON.stringify(user))
          window.location.hash = lang + '/profile'
        }, function(error) {
          console.log('Error while updating user:', error)
        });
      }
    }, (error) => {
      console.log('Error while creating user:', error)
    })
  },
  render() {
    const lang = this.props.language
    const local = this.props.local.register
    const debug = this.props.local.debug

    return (
      <div id='register-container' className='white-container'>
        <p>{local.title}</p>
        <p><input className='form-control' ref='username' type='text' placeholder={local.username}/></p>
        <p><input className='form-control' ref='email' type='email' placeholder={local.email}/></p>
        <p><input className='form-control' ref='password' type='password' placeholder={local.password}/></p>
        <p><input className='form-control' ref='password2' type='password' placeholder={local.password2}/></p>
        <div class="checkbox">
          <label>
            <input type="checkbox"/> Ich Akzeptiere die AGBs un die Nutzungsbedingungen.
          </label>
        </div>
        <p><button className="btn btn-primary" onClick={this.signup}>{local.signup}</button></p>
        <br/>
        <p>{local.hasAccount} <Link to={'/' + lang + '/login'}>{local.signinNow}</Link></p>
      </div>
    )
  },
  componentDidMount() {
    this.refs.username.focus();
  }
})
