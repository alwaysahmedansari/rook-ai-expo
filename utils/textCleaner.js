const removals = [
  /As an AI/gi,
  /I can help you/gi,
  /Sure!/gi,
  /Here is/gi
];

export default {
  clean(text = '') {
    let out = text;
    removals.forEach(r => { out = out.replace(r, ''); });
    // Remove multiple spaces and leading/trailing whitespace
    out = out.replace(/\s{2,}/g, ' ').trim();
    return out;
  }
};
