module.exports = {
    publishMessage2: async function () {
      // Imports the Google Cloud client library
        const {PubSub} = require('@google-cloud/pubsub');  
      
        const pubSubClient = new PubSub();  
      
        const topicName = 'FireFirstFunction';

        const data = JSON.stringify({foo: 'New Publish Name'});

        // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
        const dataBuffer = Buffer.from(data);
      
        const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
        console.log(`Message2 ${messageId} published.`);
    },
    bar: function () {
      return(true);
    }
  };