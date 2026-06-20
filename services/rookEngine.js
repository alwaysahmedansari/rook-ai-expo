import systemPrompt from '../core/systemPrompt';
import gemini from './gemini';
import contextManager from '../core/contextManager';
import textCleaner from '../utils/textCleaner';

const rookEngine = {
  async sendMessage(userMessage) {
    // add user input to context
    contextManager.addToContext({ role: 'user', content: userMessage });

    const prompt = systemPrompt.getSystemPrompt();
    const context = contextManager.getContext();

    const response = await gemini.callGeminiAPI({ prompt, context });
    const raw = response?.text || '';
    const clean = textCleaner.clean(raw);

    // store assistant reply
    contextManager.addToContext({ role: 'assistant', content: clean });

    return clean;
  }
};

export default rookEngine;
