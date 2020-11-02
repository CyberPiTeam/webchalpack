FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install

RUN echo "flag{unsafe_static_hosting}" > /etc/flag

USER node

CMD npm start
