FROM node:14.14.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8089

CMD npm run build && npm run start:ssr
