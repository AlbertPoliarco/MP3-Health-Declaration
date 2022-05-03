import axios from "axios"
import React, { Component } from "react"

export default class HealthList extends Component {
  constructor(props) {
    super(props)

    this.state = { health: [] }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/health/")
      .then((res) => {
        this.setState = { health: res.data }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteHealth(id){
    axios.delete('http://localhost:4000/health/'+id)
  }
  healthDeclarations() {
    return this.state.health.map(currentHealth => {
      return <Health health={currentHealth} deleteHealth{this.deleteHealth} key={currentHealth._id} />
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Health List</h1>
        <table className='table table-bordered table-hover rounded-1'>
          <thead className='bg-secondary'>
            <tr className='text-light'>
              <th>Full Name</th>
              <th>Temperature</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          {/* <tbody>{this.healthDeclarations()}</tbody>÷ */}
        </table>
      </div>
    )
  }
}
