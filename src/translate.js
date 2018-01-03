var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
require('dotenv').config();

var language_translator = new LanguageTranslatorV2({
    username: process.env.IBM_TRANSLATION_USERNAME,
    password: process.env.IBM_TRANSLATION_PASSWORD,
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});

console.log('Mensagem:', process.argv[2]);

language_translator.translate(
  {
    text: process.argv[2],
    source: 'pt',
    target: 'en'
  },
  function(err, translation) {
    if (err)  {
        console.log('error:', err);
        } else  {
            // console.log(JSON.stringify(translation, null, 2));
            console.log(JSON.stringify(translation.translations, null, 2));
        }
    }
);

language_translator.identify(
  {
    text: process.argv[2]
  },
  function(err, language) {
    if (err)  {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(language, null, 2));
    }
  }
);