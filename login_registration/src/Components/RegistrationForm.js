import React, { useState } from 'react'
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [registration, setRegistration] = useState({
    fname: '',
    lname: '',
    email: '',
    phno: '',
    password: '',
  })
  const [records, setRecords] = useState([])

  const changeHandler = (e) => {
    // const pageName = e.target.name
    // const pageValue = e.target.value
    // console.log(pageName, pageValue)
    setRegistration({ ...registration, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(registration)
    const newRegistration = { ...registration, id: new Date().getTime() }
    // console.log(newRegistration.id)
    setRecords([...records, newRegistration])
    console.log(records)
    setRegistration({ fname: '', lname: '', email: '', phno: '', password: '' })
  }
  return (
    <>
      <div className="container">
        <h1>Registration form</h1>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            autoComplete="off"
            value={registration.fname}
            onChange={changeHandler}
            name="fname"
            id="first_name"
            placeholder="John"
          />
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            autoComplete="off"
            value={registration.lname}
            onChange={changeHandler}
            name="lname"
            id="last_name"
            placeholder="Doe"
          />
          <label htmlFor="email">Email ID</label>
          <input
            type="text"
            autoComplete="off"
            value={registration.email}
            onChange={changeHandler}
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
          <label htmlFor="ph_no">Phone no</label>
          <input
            type="text"
            autoComplete="off"
            value={registration.phno}
            onChange={changeHandler}
            name="phno"
            id="ph_no"
            placeholder="+91-8966654467"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={registration.password}
            onChange={changeHandler}
            name="password"
            id="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <button type="submit">Submit</button>
        </form>

        {records.map((currentValue) => {
          return (
            <>
              <div className="currentValue" key={records.id}>
                <p>{currentValue.fname}</p>
                <p>{currentValue.lname}</p>
                <p>{currentValue.email}</p>
                <p>{currentValue.phno}</p>
                <p>{currentValue.password}</p>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default RegistrationForm
