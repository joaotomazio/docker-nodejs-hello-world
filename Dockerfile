FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY index.* ./
EXPOSE 8080
CMD [ "node", "index.js" ]
