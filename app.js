const express = require("express")
const app = express()
const path = require('path');
const alertRoutes = require('./routes/alertRoutes');
const { stockEmitter, startSimulation } = require('./services/simulatorService');
const { handlePriceUpdate } = require('./services/anomalyService');
app.use(express.json());
app.use('/api', alertRoutes);
stockEmitter.on('priceUpdate', handlePriceUpdate);
startSimulation();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'auth.html'));
});

app.listen(8080, ()=>console.log("server started on 8080 port"))




