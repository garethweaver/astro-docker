FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD node ./dist/server/entry.mjs
