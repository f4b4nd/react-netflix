FROM node:12.21.0-alpine3.10

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

ENTRYPOINT ["sh", "docker-entrypoint.sh"]