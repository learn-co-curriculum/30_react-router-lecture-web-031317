import React from 'react'

import { Link } from 'react-router-dom'

function StudentList(props) {
  console.log('StudentList called')

  const nameEls = props.students.map( student => {
    return (
      <li key={student.id}>
        <Link to={`/students/${student.id}`}>{student.name}</Link>
      </li>
    )
  })

  return (
      <div className='col-md-4'>
        <ul>
          { nameEls }
        </ul>
      </div>
  )
}

export default StudentList
