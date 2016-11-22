import './styles/index.styl'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, useRouterHistory, hashHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'

import locals from './libs/languages/index.js'

import Root       from './modules/Root.jsx'
import Home       from './modules/Home.jsx'
import Login      from './modules/Login.jsx'
import Idea       from './modules/Idea.jsx'
import Reality    from './modules/Reality.jsx'
import Impressum  from './modules/Impressum.jsx'
import Contact    from './modules/Contact.jsx'
import Terms      from './modules/Terms.jsx'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const language = 'en'

// Initialize Firebase
// const config = {
//   apiKey: "AIzaSyDYywuKg27dRTbTHw71WwX6ff1oek6Yr1o",
//   authDomain: "d-former.firebaseapp.com",
//   databaseURL: "https://d-former.firebaseio.com",
//   storageBucket: "d-former.appspot.com",
//   messagingSenderId: "715709385688"
// }
// const fireApp = firebase.initializeApp(config)
//
// console.log(fireApp.name)

render((
  <Router history={appHistory}>
    <Route locals={locals} path='/:language' component={Root}>
      <IndexRoute component={Home}/>
      <Route path='/:language/login' component={Login}/>
      <Route path='/:language/idea' component={Idea}/>
      <Route path='/:language/reality' component={Reality}/>
      <Route path='/:language/impressum' component={Impressum}/>
      <Route path='/:language/contact' component={Contact}/>
      <Route path='/:language/terms' component={Terms}/>
    </Route>
    <Redirect from='/' to={'/' + language}/>
  </Router>
), document.querySelector('#root'))
