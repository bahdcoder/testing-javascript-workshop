const bcrypt = require('bcryptjs')
const User = require('../database/models/User')

module.exports = (req, res) => {
  const { email, password } = req.body;
  // try to find the user
  User.findOne({ email }, (error, user) => {
    if (user) {
      // compare passwords.
      const same = bcrypt.compareSync(password, user.password)
      if (same) {
        req.session.userId = user._id
        res.redirect('/')
      } else {
        res.redirect('/auth/login')
      }
    } else { 
      return res.redirect('/auth/login')
    }
  })
}
