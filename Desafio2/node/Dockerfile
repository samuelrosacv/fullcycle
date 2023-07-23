FROM node:latest

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY . . 

RUN npm install   

CMD ["node","index.js"]