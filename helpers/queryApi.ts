import openai from './chatGpt';

async function query(prompt: string, chatId: string, modal: string) {
  const response = await openai
    .createCompletion({
      model: modal,
      prompt,
      top_p: 1,
      temperature: 0.5,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then(response => {
      console.log('choices', response.data.choices);
      return response.data.choices[0].text;
    })
    .catch(err => {
      return `Chatgpt was unable to find an answer for that! (Error: ${
        err?.message ?? 'Error'
      })`;
    });
  return response;
}

export default query;
