import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputCmponent from '../components/InputCmponent'
import axios from 'axios'
import { baseurl } from '../App'
const initalState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}
const Register = ({ user, setUser, setErrors, errors }) => {
  const navigate = useNavigate()
  const [value, setValue] = useState(initalState)

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, name, password, isMember } = value
    if (!email || !password || (!isMember && !name)) {
      console.log('please enter all values')
      return
    }
    // axios
    //   .get('http://localhost:5000/api/v1/user/1')
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    if (!value.isMember) {
      axios
        .post(`${baseurl}/register`, { name, email, password })
        .then((res) => {
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios
        .post(`${baseurl}/login`, { email, password })
        .then((res) => {
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // add user to local
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)
  }
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const toggleChange = () => {
    setValue({ ...value, isMember: !value.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/profile')
      }, 2000)
    }
  }, [user, navigate])

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
