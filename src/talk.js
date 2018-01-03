var ConversationV1 = require('watson-developer-cloud/conversation/v1');
require('dotenv').config();

var conversation = new ConversationV1({
    username: process.env.IBM_CONVERSATION_USERNAME,
    password: process.env.IBM_CONVERSATION_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2017_05_26
});

console.log('Mensagem:', process.argv[2]);

conversation.message(
  {
    input: { text: process.argv[2] },
    workspace_id: process.env.IBM_CONVERSATION_WORKSPACE_ID
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      // console.log(JSON.stringify(response, null, 2));
      console.log('Resposta:', response.output.text);
    }
  }
);