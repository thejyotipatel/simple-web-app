const express = require('express')
const {
  registerUser,
  loginUser,
  updateUser,
  getUser,
} = require('../controllers/authController')
const router = express.Router()

router.get('/', getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/update', updateUser)

module.exports = router
