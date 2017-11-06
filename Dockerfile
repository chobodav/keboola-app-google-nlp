FROM node:latest
MAINTAINER Radek Tomasek <radek.tomasek@gmail.com>

WORKDIR /home

RUN git clone https://github.com/radektomasek/keboola-app-google-nlp ./ && npm install

ENTRYPOINT node index.js /data