import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  signout() {
    const lang = this.props.language
    firebase.auth().signOut().then(function() {
      localStorage.removeItem('user')
      window.location.hash = lang + '/'
    }, function(error) {
      console.log('Error while signing out:', error)
    });
  },
  delete() {
    const lang = this.props.language

    const user = firebase.auth().currentUser;

    if (user) {
      user.delete().then(function() {
        localStorage.removeItem('user')
        window.location.hash = lang + '/'
      }, function(error) {
        console.log('Error while deleting user:', error)
      });
    }
  },
  render() {
    const lang = this.props.language
    const local = this.props.local.profile

    const user = JSON.parse(localStorage.getItem('user'))

    if (!user) {
      window.location.hash = lang + '/login'
    }

    return (
      <div id='profile-container' className='white-container'>
        <h1>Hello {user && user.displayName}</h1>
        <p><button className="btn btn-warning" onClick={this.signout}>{local.signout}</button></p>
        <p><button className="btn btn-danger" onClick={this.delete}>{local.delete}</button></p>
      </div>
    )
  }
})
