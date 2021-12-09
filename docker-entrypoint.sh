#!/bin/bash
app_name='netflix'

if [ ! -d "${app_name}" ]; then 
    echo "creating react application ${app_name}..."
    npx create-react-app ${app_name}


cd "${app_name}" 
if [ ! -d "node_modules" ]; then
    npm install
fi

npm start

