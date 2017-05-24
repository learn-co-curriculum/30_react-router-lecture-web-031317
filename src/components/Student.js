/////not using this file, but could have a separate component for student 

import React from 'react'

import DeleteStudentButton from './DeleteStudentButton'


// import { Switch, Route, Link } from 'react-router-dom'

function Student(props) {
  console.log('student profile page')

  // var student = props.students.find( student => student.id === props.match.params.id )
  var student = props.students.find( student => student.id == props.match.params.id )
  //above line could use === with parseInt(props.match.params.id) to change "id" string to integer, id

    return (
      <div>
          <p>Student Profile Page</p>
          <strong>Name:</strong> <h1>{student.name}</h1>
          <strong>ID:</strong> {student.id}
          <DeleteStudentButton />
      </div>
    )
} //end function

export default Student
