function autoModel(text) {
  const t = text.toLowerCase();

  if (t.includes("kode")) return "deepseek/deepseek-coder";
  if (t.includes("jelaskan")) return "anthropic/claude-3-sonnet";

  return "openai/gpt-4o-mini";
}

function getModel(user, text) {
  return user.model === "auto" ? autoModel(text) : user.model;
}

module.exports = { getModel };
