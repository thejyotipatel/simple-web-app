import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { useEffect, useState } from 'react'
import Header from './components/header'
import axios from 'axios'
export const baseurl = 'http://localhost:5000/api/v1/user'

// get user from local storage

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState()
  const logout = () => {
    setUser(null)
    sessionStorage.clear()
  }
  useEffect(() => {
    const email = sessionStorage.getItem('email')
    const password = sessionStorage.getItem('password')
    if (email && password) {
      axios
        .get(`${baseurl}/user`, { email, password })
        .then((res) => {
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} logout={logout} />

      <Routes>
        <Route
          path='/register'
          index
          element={
            <Register
              user={user}
              setUser={setUser}
              setErrors={setErrors}
              errors={errors}
            />
          }
        />
        <Route
          path='/profile'
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
