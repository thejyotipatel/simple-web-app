const express = require('express')
const {
  registerUser,
  loginUser,
  updateUser,
  getUser,
} = require('../controllers/authController')
const router = express.Router()

router.get('/user', getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/:id', updateUser)

module.exports = router
