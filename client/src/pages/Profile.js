import React, { useState } from 'react'
import InputCmponent from '../components/InputCmponent'

function Profile() {
  const user = {}
  const isLoading = false

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
  }
  return (
    <div className='container'>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit} className='form-control'>
        {/* {showAlert && <Alert />} */}
        <div className='input-controls'>
          <InputCmponent
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <InputCmponent
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <InputCmponent
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputCmponent
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'please wait...' : 'Save changes'}
        </button>
      </form>
    </div>
  )
}

export default Profile
