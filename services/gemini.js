async function callGeminiAPI({ prompt, context = [] } = {}) {
  // Use environment variable for Gemini key; do not hardcode credentials.
  const apiKey = process.env.GEMINI_API_KEY || '';

  // If no API key provided, return a mocked response suitable for Expo Go development.
  if (!apiKey) {
    const combined = [prompt, ...context.map(c => c.content || '')].join('\n');
    return { text: `Mocked response: ${combined.slice(0, 200)}${combined.length>200? '...': ''}` };
  }

  try {
    const contents = context.map(c => ({
      role: c.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: c.content || '' }]
    }));

    contents.push({ role: 'user', parts: [{ text: prompt }] });

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    const data = await res.json();
    if (data?.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return { text: data.candidates[0].content.parts[0].text };
    }
    return { text: 'Error: Could not parse response from Gemini API.' };
  } catch (e) {
    return { text: `Unable to reach Gemini API: ${e.message}` };
  }
}

export default { callGeminiAPI };