import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import StudentsApp from '../components/StudentsApp'
import StudentForm from '../components/StudentForm'
import Student from '../components/Student'
import AddStudentButton from '../components/AddStudentButton'
import DeleteStudentButton from '../components/DeleteStudentButton'

import { fetchStudents, createStudent, deleteStudent } from '../api'
//added deleteStudent above

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
    createStudent(name) //pessimistic rendering--first add name to database, then render all student names
    .then( data => this.setState( prevState => {
      return {
        students: [...prevState.students, data]
      }
    }) )
  }

  //adding handleDeleteStudent
  handleDeleteStudent(id) {
    deleteStudent(id)
    .then(deletedStudent => {
      let updatedStudents = this.state.students.filter(student => student.id !== deletedStudent.id)
    this.setState({students: updatedStudents})
    } )
    }


  render(){
  return (
    <StudentsApp
      students={this.state.students}
      onSubmit={this.handleAddStudent.bind(this)}
      onDelete={this.handleDeleteStudent.bind(this)}
    />
  )
}

  // render() {
  //   return (
  //     <div>
  //       <Switch>
  //         <Route exact path='/students'
  //           render={ () => <StudentList students={this.state.students} /> }
  //         />
  //         <Route exact path='/students/new'
  //         render={ () => {
  //           return (
  //             <div>
  //               <StudentList students={this.state.students} />
  //               <StudentForm onSubmit={ this.handleAddStudent.bind(this) }/>
  //             </div>
  //           )
  //         }}
  //       />
  //         <Route path='/students/:id'
  //         render={ routeProps => {
  //           return (
  //             <div>
  //               <StudentList students={this.state.students} />
  //               <Student students={this.state.students} {...routeProps} />
  //               {/* <DeleteStudentButton onClick={ this.handleDeleteStudent.bind(this) }/> */}
  //               <DeleteStudentButton />
  //             </div>
  //           )}
  //         }
  //         />
  //       </Switch>
  //
  //       <AddStudentButton />
  //     </div>
  //   )
  // }
} //end StudentsContainer class

export default StudentsContainer
