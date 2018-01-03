# Dojo Watson

Dojo realizado na Zenvia com base na documentação https://github.com/watson-developer-cloud/node-sdk

## To install

`npm install`

# TODO:

- Send the response somewhere
- Save and search the conversation_id
- Discover how pass the username and password with more security

## To start Conversation Connector

`npm start`

## To use Conversation Connector

```
curl -X POST -v \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "credentials":{
    "username":"",
    "password": ""
  },
  "context": {
    "workspace_id":"",
    "conversation_id": ""
  },
  "content": {
      "text": ""
  }
}' \
'http://localhost:3000/conversation'
```

# Extras:

## To use Translation

`node src/translate.js 'Mensagem a ser traduzida'`

## To use Conversation

`node src/talk.js 'Mensagem a ser conversada'`