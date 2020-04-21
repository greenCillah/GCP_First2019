// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var tools = require('./pubsub/pubsublib.js');

// [START gae_node_request_example]
const express = require('express');

const app = express();
const router = express.Router();

const topicName = 'FireFirstFunction';
const data = JSON.stringify({foo: 'Name should be here'});

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();


router.get("/",function(req,res){
  publishMessage().catch(console.error);
  res.status(200).send('Hello, Router!').end();
});

router.get("/fred",function(req,res){
  tools.publishMessage2().catch(console.error);
  res.status(200).send('Fred').end();
});


async function publishMessage() {
  const topicName = 'FireFirstFunction';

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
}

app.use("/",router);

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;
