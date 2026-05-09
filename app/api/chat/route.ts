import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('models/gemini-1.5-flash-latest'),
    messages,
    system: "You are Senko AI, an advanced, highly capable reasoning AI assistant. You help the user with any task they require, providing concise, accurate, and insightful answers. Use markdown formatting to make your responses readable.",
  });

  return result.toTextStreamResponse();
}
