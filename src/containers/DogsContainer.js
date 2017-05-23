import React, { Component } from 'react'

import NavBar from '../components/NavBar'
import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

import { Switch, Route } from 'react-router-dom'

class DogsContainer extends Component {
  constructor() {
    super()
    this.state = {
      //dogs: [{name: 'Fido', id: 0}, {name: 'Misty', id: 1}]
      dogs: ['Fido', 'Misty']
    }
  }

  handleSubmit(dog) {
    this.setState(prev => ({dogs: [...prev.dogs, dog]}))
  }

  render() {
    return (
      <div>
        <StudentList students={ this.state.dogs } />
        <StudentForm onSubmit={ this.handleSubmit.bind(this) }/>
      </div>
    )
  }
}

export default DogsContainer
