import React from 'react'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../api/index'

function DeleteStudentButton(props) {
  console.log(props);

  function deleteStudent() {
    //console.log(props);
    props.onDelete(props.studentId)
  }

  return (
    <Link
      className="btn btn-default"
      to="/students"
      onClick={deleteStudent}>Delete Student
    </Link>
  )
}

export default DeleteStudentButton
