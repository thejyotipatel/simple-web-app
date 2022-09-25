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

  res.status(200).json({
    user: {
      name: name,
      email: email,
      password: password,
    },
  })
}
// get user
const getUser = async (req, res) => {
  const { userId } = req.body

  if (!userId) {
    res.status(400).json({
      error: {
        message: 'Please provide user ID',
        statusCode: 400,
      },
    })

    console.log('Please provide user ID')
    return
  }

  res.status(200).json({
    user: {
      userId: userId,
    },
  })
}

// login
const loginUser = async (req, res) => {
  const { name, email, password } = req.body

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

  res.status(200).json({
    user: {
      email: email,
      password: password,
    },
  })
}

// update
const updateUser = async (req, res) => {
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

  res.status(200).json({
    user: {
      email: email,
      password: password,
    },
  })
}
module.exports = { registerUser, getUser, loginUser, updateUser }
