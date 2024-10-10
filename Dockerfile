FROM node:20.9-alpine3.18

ARG WORKDIR=/usr/src/app/

RUN apk update && apk upgrade --no-cache

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

EXPOSE 3000