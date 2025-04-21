const express = require('express');
const router = express.Router();
const { getAlerts } = require('../controllers/alertController');
const { authorize } = require('../middleware/authMiddleware');

router.get('/alerts', authorize, getAlerts);

module.exports = router;
