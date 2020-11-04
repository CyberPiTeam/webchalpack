FROM node:alpine

COPY . /app

WORKDIR /app

RUN apk update

RUN apk add iputils

RUN npm install

RUN echo "flag{sanitize_inputs_please}" > /etc/flag

USER node

CMD npm start
