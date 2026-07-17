import { streamText } from 'ai';
import { chatModel, SYSTEM_PROMPT, modelConfig } from '@/lib/ai/config';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: chatModel,
    system: SYSTEM_PROMPT,
    messages,
    ...modelConfig,
  });

  // result daxilindəki textStream-i birbaşa Response olaraq qaytarırıq
  return new Response(result.textStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}