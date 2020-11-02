FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install

RUN echo "flag{sanitize_inputs_please}" > /etc/flag

USER node

CMD npm start
