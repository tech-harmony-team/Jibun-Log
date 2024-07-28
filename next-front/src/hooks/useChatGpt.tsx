export const useChatGpt = () => {
  const apiKey = process.env.NEXT_PUBLIC_GPT_API_KEY;

  const connectChatGpt = async (message: string) => {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-0125",
          messages: [{ role: "user", content: message }],
          temperature: 0.7,
        }),
      });

      const json = await res.json();
      const responseMessage = json.choices[0].message.content.replace(
        /<br>/g,
        "\n"
      );
      return responseMessage;
    } catch (error) {
      return "error";
    }
  };

  return { connectChatGpt };
};
