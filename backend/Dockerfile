# ═══════════════════════════════════════════════════════════════
# 🐳 DECEMBER BACKEND - DOCKERFILE
# Optimized for Railway, Render, Fly.io
# ═══════════════════════════════════════════════════════════════

FROM oven/bun:1 AS base
WORKDIR /app

# ─────────────────────────────────────────────────────────────────
# Install dependencies
# ─────────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json bun.lock* ./
COPY src ./src
COPY config.ts ./
RUN bun install --frozen-lockfile

# ─────────────────────────────────────────────────────────────────
# Production image
# ─────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Copy necessary files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/src ./src
COPY --from=deps /app/config.ts ./
COPY package.json ./

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:4000/containers || exit 1

# Start the server
CMD ["bun", "run", "src/index.ts"]
