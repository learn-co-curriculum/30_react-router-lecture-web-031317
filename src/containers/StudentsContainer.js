import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import Student from '../components/Student'
import AddStudentButton from '../components/AddStudentButton'

import { fetchStudents, createStudent } from '../api'

class StudentsContainer extends Component {

  constructor() {
    super()
    this.state = {
      //names: [],
      students: [],
    }
  }

  componentDidMount() {
    fetchStudents()
      .then( data => this.setState({
        students: data.map(student => ({id: student.id, name: student.name}) )
      }) )
  }

  handleAddStudent(name) {
    createStudent(name)

    this.setState( prevState => {
      return {
        students: [...prevState.students, {name: name}]
      }
    })
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/students'
            render={ () => <StudentList students={this.state.students} /> }
          />
          <Route exact path='/students/new'
          render={ () => {
            return (
              <StudentForm onSubmit={ this.handleAddStudent.bind(this) }/>
            )
          }}
        />
          <Route path='/students/:id'
          render={ routeProps => {
            return (
              <div>
                <StudentList students={this.state.students} />
                <Student students={this.state.students} {...routeProps} />
              </div>
            )}
          }
          />
        </Switch>

        <AddStudentButton />
      </div>
    )
  }
}

export default StudentsContainer
