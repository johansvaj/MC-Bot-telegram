function formatAI(text) {
  if (!text) return [];

  const parts = text.split("```");
  let result = [];

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      if (parts[i].trim()) {
        result.push({ type: "text", value: parts[i].trim() });
      }
    } else {
      let lines = parts[i].split("\n");
      let lang = lines[0].trim();
      let code = lines.slice(1).join("\n");

      result.push({
        type: "code",
        lang: lang || "text",
        value: code
      });
    }
  }

  return result;
}

module.exports = { formatAI };
