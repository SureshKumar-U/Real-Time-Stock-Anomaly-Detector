const alertModel = require('../models/alertModel');

const getAlerts = (req, res) => {
  res.json(alertModel.getLastAlerts());
};

module.exports = { getAlerts };
