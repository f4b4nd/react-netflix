FROM node:16.13.1-alpine3.12

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
