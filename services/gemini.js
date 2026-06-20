async function callGeminiAPI({ prompt, context = [], apiKey } = {}) {
  // If no API key provided, return a simple mocked response.
  if (!apiKey) {
    const combined = [prompt, ...context.map(c => c.content || '')].join('\n');
    return {
      text: `Thoughtful reply based on: ${combined.slice(0, 200)}${combined.length>200? '...': ''}`
    };
  }

  // Example fetch to a hypothetical Gemini endpoint. Users can set GEMINI_API_KEY in env.
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: prompt }, ...context.map(c=>({role:c.role, content:c.content}))]
      })
    });
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || JSON.stringify(data);
    return { text };
  } catch (e) {
    return { text: `Unable to reach Gemini API: ${e.message}` };
  }
}

export default { callGeminiAPI };
