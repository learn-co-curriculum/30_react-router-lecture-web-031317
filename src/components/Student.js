import React from 'react'

// import { Switch, Route, Link } from 'react-router-dom'

function Student(props) {
  console.log('student profile page')

  // var student = props.students.find( student => student.id === props.match.params.id )
  var student = props.students.find( student => student.id == props.match.params.id )

    return (
      <div>
          <h1>Student Profile Page</h1>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>ID:</strong> {student.id}</p>
      </div>
    )
} //end function

export default Student
