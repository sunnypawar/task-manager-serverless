// exports.handler =  (event, context, callback) => {
//     return callback(null, { statusCode: 200, body: "Hello World-1"});
// };

const serverless = require('serverless-http');

const express = require('express'); 
const helloworld = express();
helloworld.use(express.urlencoded({ extended: true }));
helloworld.use(express.json());
helloworld.get('/api/info', (req, res) => {
  // res.send({ application: 'Sunny_sample-app', version: '1.0' });
  res.send({ statusCode: 200, body: "Hello Sunny-1"});
});
helloworld.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
helloworld.listen(3000, () => console.log(`Listening on: 3000`));

module.exports.handler = serverless(helloworld);
