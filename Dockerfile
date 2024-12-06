FROM ubuntu:latest

RUN apt update
RUN apt install -y nodejs npm

COPY . .
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
ENTRYPOINT [ "node", "index.js" ]