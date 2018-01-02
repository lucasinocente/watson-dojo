var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    username: "<username>",
    password: "<password>",
    version_date: ConversationV1.VERSION_DATE_2017_05_26
});

console.log('Mensagem:', process.argv[2]);

conversation.message(
  {
    input: { text: process.argv[2] },
    workspace_id: '<workspace_id>'
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