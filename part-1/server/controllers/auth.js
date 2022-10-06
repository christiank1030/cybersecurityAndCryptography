const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User');
      const { username, password } = req.body;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const compareHash = bcrypt.compareSync(password, users[i].hashedPassword);
          if(compareHash) {
            let returnedUser = { ...users[i] };
            delete returnedUser.hashedPassword;
            res.status(200).send(returnedUser);
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const { username, email, firstName, lastName, password } = req.body;

      const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(12));

      let userObj = {
        username,
        email,
        firstName,
        lastName,
        hashedPassword
      }

      console.log('Registering User');
      users.push(userObj);
      let userInfo = { ...userObj };
      res.status(200).send(userInfo);
    }
}