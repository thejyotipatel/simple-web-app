import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({ children }) {
  const user = ''
  if (user) {
    return <Navigate to='/register' />
  }
  return children
}

export default ProtectedRoute
