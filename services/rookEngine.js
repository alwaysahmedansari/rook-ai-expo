import gemini from './gemini';
import systemPrompt from '../core/systemPrompt';
import contextManager from '../core/contextManager';
import textCleaner from '../utils/textCleaner';

const rookEngine = {
  async sendMessage(userMessage) {
    contextManager.addToContext({ role: 'user', content: userMessage });

    const prompt = systemPrompt.getSystemPrompt();
    const context = contextManager.getContext();

    const apiKey = null; // Set GEMINI API key via env or modify this file when deploying.

    const payload = {
      prompt,
      context,
      apiKey
    };

    const response = await gemini.callGeminiAPI(payload);
    const raw = response?.text || '';
    const clean = textCleaner.clean(raw);

    contextManager.addToContext({ role: 'assistant', content: clean });

    return clean;
  }
};

export default rookEngine;
