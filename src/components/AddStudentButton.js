import React from 'react'
import { Link } from 'react-router-dom'

function AddStudentButton(props) {

  return (
    <Link 
      className="btn btn-default"
      to="/students/new">Add Student</Link>
  )
}

export default AddStudentButton
