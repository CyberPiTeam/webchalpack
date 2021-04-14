FROM node:12.8.0-alpine

COPY . /app

WORKDIR /app

RUN apk update

RUN apk add iputils

RUN npm install

RUN echo "flag{sanitize_inputs_please}" > /etc/flag

USER node

CMD npm start
