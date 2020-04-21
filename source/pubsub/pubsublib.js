module.exports = {
    publishMessage2: async function () {
        const topicName = 'FireFirstFunction';

        // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
        const dataBuffer = Buffer.from(data);
      
        const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
        console.log(`Message2 ${messageId} published.`);
    },
    bar: function () {
      return(true);
    }
  };