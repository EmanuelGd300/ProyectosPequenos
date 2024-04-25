const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
async function crear(){
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: "Wich is the pokemon number 100",
  max_tokens: 300,
});
console.log(response.data.choices[0].text);
}
module.exports = {crear};