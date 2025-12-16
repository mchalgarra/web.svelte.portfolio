FROM node:22-alpine AS base

RUN corepack enable
RUN corepack prepare pnpm@10.26.0 --activate

COPY . /app
WORKDIR /app

FROM base AS build
ENV CI=true
RUN pnpm install
RUN pnpm build

WORKDIR /app

CMD ["node", "build"]

EXPOSE 3000
