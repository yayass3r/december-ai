# ═══════════════════════════════════════════════════════════════
# 🐳 DECEMBER BACKEND - DOCKERFILE
# Optimized for Render deployment
# ═══════════════════════════════════════════════════════════════

FROM oven/bun:1-alpine

WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl

# Copy package files first
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile || bun install

# Copy source code and config
COPY src ./src
COPY config.ts ./

# Environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Expose port
EXPOSE 4000

# Start the server directly with bun
CMD ["bun", "run", "src/index.ts"]
