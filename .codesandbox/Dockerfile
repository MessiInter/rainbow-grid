FROM node:20

WORKDIR /workspace

ENV PNPM_HOME=/root/.pnpm

ENV PATH=/usr/local/bin:/workspace/node_modules/.bin:/root/.pnpm:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin

ARG npm_config_yes=true

RUN npx pnpm@latest add -g pnpm@latest

ENV NODE_ENV=development
