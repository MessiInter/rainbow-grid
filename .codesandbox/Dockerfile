FROM node:latest

WORKDIR /workspace

RUN npm install -g pnpm@latest

ENV PNPM_HOME=/root/.pnpm

ENV PATH=/usr/local/bin:/workspace/node_modules/.bin:/root/.pnpm:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin

ENV NODE_ENV=development