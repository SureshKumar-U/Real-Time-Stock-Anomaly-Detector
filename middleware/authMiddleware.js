require('dotenv').config();

function authorize(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token !== `Bearer ${process.env.API_KEY}`) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  next();
}

module.exports = { authorize };
