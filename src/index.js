import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import Main from './components/Main'
// import withRouter from './components/hocs/withRouter'

ReactDOM.render((
  <Router>
    < Main />
  </Router>
), document.getElementById('container'))
