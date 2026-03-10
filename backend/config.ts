// Make sure to replace the values with your actual API key and model

// USING GROQ API - FREE and FAST! 🚀
// Get your free API key at: https://console.groq.com/keys

export const config = {
  aiSdk: {
    // Groq API base URL (FREE tier available)
    baseUrl: "https://api.groq.com/openai/v1",

    // Get your FREE API key from: https://console.groq.com/keys
    apiKey: process.env.GROQ_API_KEY || "YOUR_GROQ_API_KEY_HERE",

    // Using Llama 3.1 70B - FREE on Groq! 🎉
    model: "llama-3.1-70b-versatile",
    
    // Temperature for creativity (0-1)
    temperature: 0.7,
  },
} as const;
