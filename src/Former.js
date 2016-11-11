import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const routes = {

}

export default class Former extends React.Component {
  constructor() {
    super()
  }
  render() {
    const styles = {
      body: {
        background: 'url(img/background.png)',
        width: '100vw',
        height: '100vh'
      },
      content: {
        padding: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto',
      }
    }

    return (
      <div style={styles.body}>
        <Header background="#e74c3c"/>
        <div style={styles.content}>
          <Router history={hashHistory}>
            <Route path="/" component={Content}/>
            <Route path="/apple" component={Header}/>
          </Router>
        </div>
        <Footer background="#e74c3c"/>
      </div>
    )
  }
}
