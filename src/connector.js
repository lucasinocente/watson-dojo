const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const request = require('request');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
require('dotenv').config();

app.get('/status', (req, res) => {
  res.sendStatus(200);
});

app.post('/conversation', (req, res) => {

  console.log('Sent:', JSON.stringify(req.body.context), JSON.stringify(req.body.content));

  const conversation = new ConversationV1({
      username: req.body.credentials.username,
      password: req.body.credentials.password,
      version_date: ConversationV1.VERSION_DATE_2017_05_26
  });

  const payload = {
    input: { text: req.body.content.text },
    workspace_id: req.body.context.workspace_id,
    context: { conversation_id: req.body.context.conversation_id }
  };

  conversation.message( payload, function(err, response) {
      if (err) {
        console.error('Error:', JSON.stringify(err));
        res.send(err);
      } else {
        console.log('Received:', JSON.stringify(response));
        res.send(response.output.text);
      }
    }
  );
  
});

server.listen( process.env.PORT || 3000, () => {
    console.log(`Server listen on: http://localhost:${process.env.PORT || 3000}`);
});