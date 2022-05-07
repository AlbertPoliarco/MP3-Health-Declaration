import axios from "axios"
import React, { Component } from "react"

export default class EditHealth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullname: "",
      temperature: "",
      email: "",
      phonenumber: "",
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
  }
  componentDidMount() {
    axios
      .get("https://mp-3-health-declaration.vercel.app/health/")
      .then((res) => {
        this.setState({
          fullname: res.data.fullname,
          temperature: res.data.temperature,
          email: res.data.email,
          phonenumber: res.data.phonenumber,
        })
      })
      .catch((error) => console.log(error))
  }

  onValueChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const health = {
      fullname: this.state.fullname,
      temperature: this.state.temperature,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
    }
    axios
      .post("https://mp-3-health-declaration.vercel.app/update/", health)
      .then((res) => (window.location = "/"))
      .catch((err) => console.log("Error :" + err))
  }

  render() {
    return (
      <div className='container'>
        <h1>Update Health Declaration</h1>

        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Full Name</label>
            <input
              type='text'
              className='form-control'
              data-name='fullname'
              required
              onChange={this.onValueChange}
              value={this.state.fullname}
            />
          </div>
          <div className='form-group'>
            <label>Temperature</label>
            <input
              type='number'
              step='0.1'
              className='form-control'
              data-name='temperature'
              required
              onChange={this.onValueChange}
              value={this.state.temperature}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              data-name='email'
              required
              onChange={this.onValueChange}
              value={this.state.email}
            />
          </div>
          <div className='form-group'>
            <label>Phone Number</label>
            <input
              type='tel'
              className='form-control'
              data-name='phonenumber'
              required
              onChange={this.onValueChange}
              value={this.state.phonenumber}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
