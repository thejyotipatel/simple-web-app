import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputCmponent from '../components/InputCmponent'
const initalState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(initalState)

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(e)
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const toggleChange = () => {
    setValue({ ...value, isMember: !value.isMember })
  }
  return (
    <div className='container'>
      <form className='form-controls' onSubmit={onSubmit}>
        <h1>{value.isMember ? 'Login' : 'register'}</h1>
        {/* {showAlert && <Alert />} */}

        {!value.isMember && (
          <InputCmponent
            value={value.name}
            name='name'
            type='text'
            labelText='name'
            handleChange={handleChange}
          />
        )}

        <InputCmponent
          value={value.email}
          name='email'
          type='email'
          labelText='email'
          handleChange={handleChange}
        />
        <InputCmponent
          value={value.password}
          name='password'
          type='password'
          labelText='password'
          handleChange={handleChange}
        />
        <button
          type='submit'
          // disabled={isLoading}
          className='btn'
        >
          {value.isMember ? 'Login' : 'Register'}
        </button>
        <p className='toggle-contant'>
          {value.isMember ? 'Not Register yet? ' : 'Already Registered? '}
          <button type='button' className=' btn-toggle' onClick={toggleChange}>
            {!value.isMember ? 'Login' : 'Register'}
          </button>
          here
        </p>
      </form>
    </div>
  )
}

export default Register
