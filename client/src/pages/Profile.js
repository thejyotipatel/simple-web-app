import React, { useEffect, useState } from 'react'
import InputCmponent from '../components/InputCmponent'
import { baseurl } from '../App'
import axios from 'axios'

function Profile({ user, setUser, setErrors, errors }) {
  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [password, setPassword] = useState(user?.password)
  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    if (!email || !password || !name) {
      console.log('please enter all values')
      setIsLoading(true)

      return
    }
    axios
      .patch(`${baseurl}/${user.id}`, { name, email, password })
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
    setIsLoading(false)
    // add user to local
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-controls'>
        <h1>Profile</h1>
        {/* {showAlert && <Alert />} */}
        <div className='input-controls'>
          <InputCmponent
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />

          <InputCmponent
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputCmponent
            type='text'
            name='password'
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn' disabled={isLoading}>
          {isLoading ? 'please wait...' : 'Save changes'}
        </button>
      </form>
    </div>
  )
}

export default Profile
