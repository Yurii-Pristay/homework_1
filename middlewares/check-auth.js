const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    if (req.headers['access-token']) {
      const decoded = await jwt.verify(req.headers['access-token'], 'FeedReader');
      req.userData = decoded;

      return next();
    } else return res.status(401).json({ message: 'Access token is absent!' });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};
