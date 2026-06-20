const MAX_CONTEXT = 15;
let buffer = [];

export default {
  addToContext(message) {
    if (!message || !message.content) return;
    buffer.push({ role: message.role || 'user', content: message.content });
    if (buffer.length > MAX_CONTEXT) buffer = buffer.slice(buffer.length - MAX_CONTEXT);
  },
  getContext() {
    return buffer.slice();
  }
};
