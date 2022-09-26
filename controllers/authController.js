const db = require('../db/index')
const Users = db.users
// const Op = db.Sequelize.Op
// register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400).json({
      error: {
        message: 'Please provide all values',
        statusCode: 400,
      },
    })

    console.log('Please provide all values.')
    return
  }
  const info = { name, email, password }
  const user = await Users.create(info)
  res.status(200).json(user)
}
// get all user
const getUser = async (req, res) => {
  const { email, password } = req.body

  let user = await Users.findOne({
    where: { email: email, password: password },
  })

  res.status(200).json(user)
}

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({
      error: {
        message: 'Please provide all values',
        statusCode: 400,
      },
    })
    console.log('Please provide all values.')
    return
  }

  let user = await Users.findOne({
    where: { email: email, password: password },
  })

  res.status(200).json(user)
}

// update
const updateUser = async (req, res) => {
  const { id } = req.params

  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400).json({
      error: {
        message: 'Please provide all values',
        statusCode: 400,
      },
    })

    console.log('Please provide all values.')
    return
  }

  let user = await Users.update(
    { name, email, password },
    { where: { id: id } }
  )
  user = await Users.findOne({ where: { id: id } })
  res.status(200).json(user)
}

module.exports = { registerUser, getUser, loginUser, updateUser }
