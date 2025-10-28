FROM node:22-slim AS deps

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml /app/
WORKDIR /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM node:22-slim AS build
WORKDIR /app
RUN corepack enable

COPY public /app/public
COPY src /app/src

COPY eslint.config.mjs next.config.ts package.json postcss.config.mjs tsconfig.json /app/

COPY --from=deps /app/node_modules /app/node_modules
RUN pnpm run build

FROM denoland/deno:2.5.4 AS release
USER deno

WORKDIR /app

COPY --chown=deno:deno --from=build /app/.next/standalone /app
COPY --chown=deno:deno --from=build /app/.next/static /app/.next/static
COPY --chown=deno:deno --from=build /app/public /app/public

EXPOSE 3000

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-sys", "--unstable-detect-cjs", "--unstable-node-globals", "--unstable-bare-node-builtins", "--unstable-sloppy-imports", "--allow-write", "server.js"]
