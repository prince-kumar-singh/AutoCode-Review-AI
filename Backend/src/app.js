const express =require('express');
const aiRoutes = require('./services/routes/ai.routes');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/ai', aiRoutes);

module.exports = app;