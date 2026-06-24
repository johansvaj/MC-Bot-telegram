# 🤖 MC Bot AI

MC Bot AI adalah Telegram AI Bot berbasis OpenRouter dengan dukungan multi-model, memory system, ChatGPT-style output, dan code formatting.

## ✨ Features

### 🤖 AI Models
- GPT-4o Mini
- GPT-4o
- Claude Sonnet
- Claude Haiku
- Gemini Pro
- DeepSeek Chat
- DeepSeek Coder
- LLaMA 3
- Qwen
- Mistral
- Auto Router

### 🧠 Memory System
- Mengingat percakapan sebelumnya
- Menyimpan konteks user
- Mengurangi penggunaan token
- Auto memory compression

### 💻 Coding Features
- Code block formatter
- Syntax highlighting
- Copy-friendly code output
- Multi-language support

### 🎨 Telegram UI
- Inline keyboard
- Model selector
- ChatGPT-style responses
- Auto mode

### ⚡ Performance
- Auto model routing
- Fast responses
- Memory optimization

---

# 📦 Installation

## 1. Clone Repository

```bash
git clone https://github.com/USERNAME/mc-bot-ai.git
cd mc-bot-ai
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Create .env

Salin file:

```bash
cp .env.example .env
```

Isi:

```env
BOT_TOKEN=YOUR_BOT_TOKEN
OPENROUTER_API_KEY=YOUR_OPENROUTER_KEY
ALLOWED_USERS=123456789
```

## 4. Run Bot

```bash
node index.js
```

Bot akan online.

---

# 🔑 Getting API Keys

## Telegram Bot Token

1. Buka Telegram
2. Cari BotFather
3. Jalankan:

```text
/newbot
```

4. Salin token yang diberikan

---

## OpenRouter API Key

1. Buat akun di OpenRouter
2. Masuk ke dashboard
3. Generate API Key
4. Masukkan ke file .env

---

# 📚 Commands

## Model Commands

```text
/models
```

Menampilkan daftar model.

```text
/auto
```

Mengaktifkan auto model selection.

---

# 💬 Example Chat

User:

```text
Buat kalkulator Python
```

Bot:

```python
def tambah(a, b):
    return a + b

print(tambah(2, 3))
```

---

# 🏗 Project Structure

```text
mc-bot-ai/
├── index.js
├── config/
├── core/
├── handlers/
├── utils/
├── memory.json
├── package.json
└── README.md
```

---

# 🛠 Requirements

- Node.js 18+
- Telegram Bot Token
- OpenRouter API Key

---

# 🚀 Roadmap

- [x] Multi Model AI
- [x] Memory System
- [x] Code Formatter
- [x] Model Selector
- [ ] Voice AI
- [ ] Image AI
- [ ] Web Search
- [ ] File Analysis
- [ ] Project Generator
- [ ] Autonomous Agent

---

# 📄 License

MIT License

---

# ⭐ Support

Jika project ini membantu:

⭐ Star repository

🍴 Fork repository

🐛 Report issues

🤝 Contribute

---

Made with ❤️ by MC Bot AI
