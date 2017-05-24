export function fetchStudents(){
  return fetch("http://localhost:3000/api/v1/students")
    .then( res => res.json() )
}

export function createStudent(name){
  return fetch("http://localhost:3000/api/v1/students", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {student: {name: name}} )
  }).then(response => response.json() )
}

//adding deleteStudent
//export function deleteStudent(name){
export function deleteStudent(id){
  return fetch("http://localhost:3000/api/v1/students/" + id, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    //sucess: console.log('deleted student')
    body: JSON.stringify( {student: {name: name}} )
  }).then(response => response.json() )
  // .then(data => data)
  /////moved then to handleDeleteStudent function in StudentsContainer
}
