import React, {Component} from 'react'

class StudentForm extends React.Component {

  //constructor(props){
  constructor() {
    super()
    this.state = { student: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      student: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit( this.state.student )
    this.setState({student: ''})
    window.history.pushState('/students') //adding this
  }

  render() {
    return (
      <div className='col-md-8' >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Student Name</label>
          <input type='text' value={this.state.student} onChange={this.handleInputChange}/>
          <input type='submit' value='Add a Student' />
        </form>
      </div>
    )
  }
}

export default StudentForm
