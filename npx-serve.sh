#!/bin/bash
export NODE_OPTIONS=--openssl-legacy-provider

WORKDIR=/usr/src/app/
APP_NAME=app

cd "$WORKDIR/$APP_NAME"

 
if [ ! -d "node_modules" ]; then
    npm install
fi

npx react-scripts start --host 0.0.0.0