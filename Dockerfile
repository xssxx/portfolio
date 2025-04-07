FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./

COPY . ./

RUN bun install

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
