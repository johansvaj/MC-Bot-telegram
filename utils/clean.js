function clean(text) {
  if (!text) return "";
  return text.replace(/```[a-zA-Z]*\n?/g, "").replace(/```/g, "").trim();
}

module.exports = { clean };
