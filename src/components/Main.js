import React, {Component} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import NavBar from './NavBar'
import LoginForm from './LoginForm'
import StudentsContainer from '../containers/StudentsContainer'

import { logIn } from '../api'
import isAuthenticated from './hocs/isAuthenticated'

const AuthedStudentsContainer = isAuthenticated(StudentsContainer)

class Main extends Component {

  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(params){
    logIn(params)
      .then(res => {
        if (res.error) {
          return
        }
        localStorage.setItem('jwt', res.token)
        this.props.history.push('/students')
      })
  }

  render() {
    return (
      <div>
        < NavBar title="Dog and Student Lister" color="black" />
        <Switch>
          < Route path="/login" render={() => <LoginForm handleLogin={this.handleLogin} />} />
          < Route path="/students" component={AuthedStudentsContainer} />
          < Route exact path="/about"  render={() => <h1>This is an app about dogs and students</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main)
