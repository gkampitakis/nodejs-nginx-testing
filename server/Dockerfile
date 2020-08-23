FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install pm2 -g

RUN npm install

COPY . .

ENV NODE_ENV prod

EXPOSE 4000

USER node

CMD ["pm2-runtime", "ecosystem.config.js"]