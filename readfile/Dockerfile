FROM node:12.8.0-alpine

COPY . /app

WORKDIR /app

RUN npm install

RUN echo "flag{unsafe_static_hosting}" > /etc/flag

USER node

CMD npm start
