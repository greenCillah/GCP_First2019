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

var pubSubTools = require('./pubsub/pubsublib.js');
var dataInterface = require('./dataAccess/dataAccess.js');

//Firestore
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

// [START gae_node_request_example]
const express = require('express');

const app = express();
const router = express.Router();

router.get("/",function(req,res){
  res.status(200).send('Hello, Router!').end();
});

router.get("/fred",function(req,res){
  pubSubTools.sendToQueue("text");
  res.status(200).send('Fred').end();
});

router.get("/getdata",function(req,res){

  res.send(dataInterface.getRecords(db));
  console.log("end of getdata");
});


router.get("/add",function(req,res){
  let docRef = db.collection('users').doc('alovelace');

  let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });


  res.status(200).send('add').end();
});

app.use("/",router);

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
