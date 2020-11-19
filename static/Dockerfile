FROM alpine

RUN apk update

RUN apk add nginx

RUN mkdir -p /run/nginx

RUN mkdir -p /var/www/html

COPY default.conf /etc/nginx/nginx.conf

COPY index.html  /var/www/html/index.html

COPY main.css  /var/www/html/main.css

EXPOSE 80

#CMD  while true; do sleep 12 ; done
CMD nginx && while true; do sleep 12 ; done

