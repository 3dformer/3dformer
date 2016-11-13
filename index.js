import React from 'react'
import { render } from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Former   from './modules/Former'
import Content  from './modules/Content'
import Home     from './modules/Home'
import Login    from './modules/Login'
import Idea     from './modules/Idea'
import Reality  from './modules/Reality'
import Impressum    from './modules/Impressum'
import Contact     from './modules/Contact'
import AGBs  from './modules/AGBs'

render((
  <Router history={appHistory}>
    <Route path='/' component={Former}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/idea" component={Idea}/>
      <Route path="/reality" component={Reality}/>
      <Route path="/impressum" component={Impressum}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/agbs" component={AGBs}/>
    </Route>
  </Router>
), document.querySelector('#root'))
