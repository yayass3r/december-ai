# ═══════════════════════════════════════════════════════════════
# 🚀 DECEMBER AI - DEPLOYMENT GUIDE
# ═══════════════════════════════════════════════════════════════

# 🔐 ENVIRONMENT VARIABLES (Set these in your deployment platform)
# ─────────────────────────────────────────────────────────────────

# Required - Choose one:
GROQ_API_KEY=your_groq_api_key_here
# OR
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Optional:
PORT=4000
NODE_ENV=production

# ═══════════════════════════════════════════════════════════════
# 🎯 OPTION 1: RAILWAY.APP (Recommended - Easiest!)
# ═══════════════════════════════════════════════════════════════

# 1. Go to: https://railway.app
# 2. Sign up with GitHub
# 3. Click "New Project" → "Deploy from GitHub repo"
# 4. Select: yayass3r/december-ai
# 5. Add environment variables:
#    - GROQ_API_KEY
#    - OPENROUTER_API_KEY
# 6. Deploy! 🚀

# Free tier: $5 credit/month (enough for development)

# ═══════════════════════════════════════════════════════════════
# 🎨 OPTION 2: RENDER.COM (Best Free Tier!)
# ═══════════════════════════════════════════════════════════════

# 1. Go to: https://render.com
# 2. Sign up with GitHub
# 3. Create "New Web Service"
# 4. Connect repo: yayass3r/december-ai
# 5. Settings:
#    - Environment: Docker
#    - Dockerfile Path: backend/Dockerfile
#    - Plan: Free
# 6. Add environment variables
# 7. Deploy! 🚀

# Free tier: 750 hours/month (always free!)

# ═══════════════════════════════════════════════════════════════
# ✈️ OPTION 3: FLY.IO (Fast & Global!)
# ═══════════════════════════════════════════════════════════════

# 1. Install flyctl:
#    curl -L https://fly.io/install.sh | sh

# 2. Login:
#    fly auth login

# 3. Launch:
#    fly launch

# 4. Set secrets:
#    fly secrets set GROQ_API_KEY=your_groq_api_key_here

# 5. Deploy:
#    fly deploy

# Free tier: 3 shared-cpu-1gb VMs

# ═══════════════════════════════════════════════════════════════
# ▲ OPTION 4: VERCEL (Frontend Only)
# ═══════════════════════════════════════════════════════════════

# 1. Go to: https://vercel.com
# 2. Import project from GitHub
# 3. Root Directory: frontend
# 4. Deploy!

# Note: Backend needs separate deployment (use Railway/Render)

# ═══════════════════════════════════════════════════════════════
# 🔧 LOCAL DEVELOPMENT
# ═══════════════════════════════════════════════════════════════

# Backend:
cd backend
bun install
bun run src/index.ts

# Frontend:
cd frontend
bun install
bun run dev

# ═══════════════════════════════════════════════════════════════
# 📊 DEPLOYMENT COMPARISON
# ═══════════════════════════════════════════════════════════════

# | Platform    | Free Tier              | Best For         |
# |-------------|------------------------|------------------|
# | Railway     | $5/month credit        | Easiest setup    |
# | Render      | 750 hours/month        | Best free tier   |
# | Fly.io      | 3 VMs + 3GB storage    | Global CDN       |
# | Vercel      | 100GB bandwidth        | Frontend only    |
