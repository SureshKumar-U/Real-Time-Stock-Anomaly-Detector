const alerts = [];

function addAlert(alert) {
  alerts.push(alert);
  if (alerts.length > 10) alerts.shift();
}

function getLastAlerts() {
  return alerts.slice();
}

module.exports = { addAlert, getLastAlerts };
