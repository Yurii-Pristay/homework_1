const bcrypt = require('bcrypt');
const User = require('../models/user-model');

const signUserUp = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = new User({ username, password });
  
      const salt = bcrypt.genSaltSync(10);
      user.password = await bcrypt.hashSync(password, salt);
      await user.save();
  
      const token = user.generateAuthToken();

      console.log();
      return res.header('access-token', token).status(200).json({ message: 'User created!' });
    } catch (err) {
      return res.status(500).json(err);
    }
    
};
  
const signUserIn = async (req, res) => {
    try {
      const { username, password } = req.body;

      let user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: 'Invalid username or password!' });
  
      const validPassword = await bcrypt.compareSync(password, user.password);
      if (!validPassword) return res.status(400).json({ message: 'Invalid username or password!' });

      const token = user.generateAuthToken();

      console.log();

      return res.header('access-token', token).status(200).json({ message: 'Signed in successfuly!' });
    } catch (err) {
      return res.status(500).json(err);
    }
};

module.exports = { signUserUp, signUserIn };
