// Make sure to replace the values with your actual API key and model

// 🔥 CHOOSE YOUR FREE AI PROVIDER 🔥
// Uncomment the one you want to use!

// ═══════════════════════════════════════════════════════════════
// 1️⃣ GROQ - FREE & FASTEST! ⚡
// Get key: https://console.groq.com/keys
// ═══════════════════════════════════════════════════════════════
export const config = {
  aiSdk: {
    baseUrl: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY || "YOUR_GROQ_API_KEY_HERE",
    model: "llama-3.1-70b-versatile",
    temperature: 0.7,
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// 2️⃣ OPENROUTER - Multiple Models! 🎯
// Get key: https://openrouter.ai/keys
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://openrouter.ai/api/v1",
//     apiKey: process.env.OPENROUTER_API_KEY || "sk-or-v1-...",
//     model: "meta-llama/llama-3.1-70b-instruct", // FREE!
//     temperature: 0.7,
//   },
// } as const;

// ═══════════════════════════════════════════════════════════════
// 3️⃣ TOGETHER AI - Fast & Reliable! 🚀
// Get key: https://api.together.xyz/settings/api-keys
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://api.together.xyz/v1",
//     apiKey: process.env.TOGETHER_API_KEY || "...",
//     model: "meta-llama/Llama-3.1-70B-Instruct-Turbo",
//     temperature: 0.7,
//   },
// } as const;

// ═══════════════════════════════════════════════════════════════
// 4️⃣ GOOGLE GEMINI - FREE & Powerful! 🌟
// Get key: https://aistudio.google.com/apikey
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
//     apiKey: process.env.GOOGLE_API_KEY || "...",
//     model: "gemini-1.5-pro",
//     temperature: 0.7,
//   },
// } as const;

// ═══════════════════════════════════════════════════════════════
// 5️⃣ FIREWORKS AI - Super Fast! 🎆
// Get key: https://fireworks.ai/api-keys
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://api.fireworks.ai/inference/v1",
//     apiKey: process.env.FIREWORKS_API_KEY || "...",
//     model: "accounts/fireworks/models/llama-v3p1-70b-instruct",
//     temperature: 0.7,
//   },
// } as const;

// ═══════════════════════════════════════════════════════════════
// 6️⃣ OLLAMA - Local & Private! 💻 (No Internet Needed!)
// Install: https://ollama.ai
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "http://localhost:11434/v1",
//     apiKey: "ollama",
//     model: "llama3.1:70b",
//     temperature: 0.7,
//   },
// } as const;
