 const {Configuration,OpenAIApi} =require('openai');
 const configuration=new Configuration({apikey:"API_KEY"});
 const openai=new OpenAIApi(configuration);

 export async function sendmsg(msg){
    const res=await openai.createCompletion({
        model:'text-davinci-003',
        prompt:msg,
        temperature:0.7,
        max_tokens:256,
        top_p:1,
        frequency_penalty:0,
        presense_penalty:0
    });
    return res.data.choices[0].text?"noapi":res.data.choices[0].text;
 }
