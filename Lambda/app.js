const serverless = require('serverless-http');

const express = require('express'); 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
  // res.send({ application: 'Sunny_sample-app', version: '1.0' });
  res.send({ statusCode: 200, body: "Hello Sunny-1"});
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
app.listen(3000, () => console.log(`Listening on: 3000`));

module.exports.handler = serverless(app);
