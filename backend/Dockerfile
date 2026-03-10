# ═══════════════════════════════════════════════════════════════
# 🐳 DECEMBER BACKEND - DOCKERFILE
# Optimized for Railway, Render, Fly.io
# ═══════════════════════════════════════════════════════════════

FROM oven/bun:1

WORKDIR /app

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

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:4000/containers || exit 1

# Start the server
CMD ["bun", "run", "src/index.ts"]
