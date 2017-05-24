import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Student from './Student'
import StudentForm from './StudentForm'
import DeleteStudentButton from './DeleteStudentButton'


function StudentsApp(props) {
  const listOfStudents = props.students.map( (student, i) =>
    <li key={i}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
  )

  return (
      <div>
        <div className='col-md-4'>
          <ul>
            { listOfStudents }
          </ul>

          <Switch>
            <Route path="/students/new" />
            <Route path="/students" render={() => <Link to="/students/new">Add Student</Link>} />
          </Switch>
        </div>

        <div className='col-md-8'>
          <Switch>
            <Route path="/students/new" render={() => <StudentForm onSubmit={ props.onSubmit }/>}/>
            {/* <Route path="/students/:id" render={() => <Student />}/> */}

            <Route path="/students/:id" render={({match}) => {
              const student = props.students.find(student => student.id === parseInt(match.params.id))
              return (
              <div>
                <h1>{student.name}</h1>
                <h3>Student ID: {student.id}</h3>

                <DeleteStudentButton
                  studentId={student.id}
                  onDelete={props.onDelete}/>
              </div>
            )
            }
            }/>

          </Switch>
        </div>
      </div>
  )
}

export default StudentsApp
