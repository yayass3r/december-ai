// Make sure to replace the values with your actual API key and model

// 🔥 CHOOSE YOUR FREE AI PROVIDER 🔥
// Uncomment the one you want to use!

// ═══════════════════════════════════════════════════════════════
// 1️⃣ GROQ - FREE & FASTEST! ⚡ (CURRENTLY ACTIVE)
// Get your key: https://console.groq.com/keys
// ═══════════════════════════════════════════════════════════════
export const config = {
  aiSdk: {
    baseUrl: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY || "",
    model: "llama-3.1-70b-versatile",
    temperature: 0.7,
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// 2️⃣ OPENROUTER - Multiple Models! 🎯
// Get your key: https://openrouter.ai/keys
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://openrouter.ai/api/v1",
//     apiKey: process.env.OPENROUTER_API_KEY || "",
//     model: "anthropic/claude-sonnet-4",
//     temperature: 0.7,
//   },
// } as const;

// ═══════════════════════════════════════════════════════════════
// 3️⃣ Z.AI (Zhipu AI) - GLM Models! 🤖
// Get your key: https://z.ai/manage-apikey/apikey-list
// Models: GLM-4.7-Flash, GLM-4.6, GLM-5
// ═══════════════════════════════════════════════════════════════
// export const config = {
//   aiSdk: {
//     baseUrl: "https://open.bigmodel.cn/api/paas/v4",
//     apiKey: process.env.ZAI_API_KEY || "",
//     model: "glm-4-flash", // أو "glm-4-plus" أو "glm-4"
//     temperature: 0.7,
//   },
// } as const;
