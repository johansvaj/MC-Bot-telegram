const fs = require("fs");

const DB_FILE = "./memory.json";

let db = fs.existsSync(DB_FILE)
  ? JSON.parse(fs.readFileSync(DB_FILE))
  : {};

function save() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function getUser(id) {
  if (!db[id]) db[id] = { memory: [], model: "auto" };
  if (!Array.isArray(db[id].memory)) db[id].memory = [];
  return db[id];
}

function getMemory(user) {
  return user.memory.slice(-8)
    .map(m => `${m.role}: ${m.text}`)
    .join("\n");
}

module.exports = { getUser, getMemory, save, db };
