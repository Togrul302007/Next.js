import { anthropic } from '@ai-sdk/anthropic';

// Model seçimi (Məsələn: Claude 3.5 Sonnet)
export const chatModel = anthropic('claude-3-5-sonnet-latest');

// Mərkəzi System Prompt
export const SYSTEM_PROMPT = `
  Sən peşəkar bir AI köməkçisən. 
  Cavablarını qısa, aydın və strukturlaşdırılmış şəkildə (Markdown ilə) təqdim et.
`;

export const modelConfig = {
  temperature: 0.7,
  maxTokens: 1000,
};