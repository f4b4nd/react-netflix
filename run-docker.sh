#!/bin/sh


IMAGE_NAME=react18:node20
CONTAINER_NAME=react18-node20-netflix
WORKDIR=/usr/src/app/

docker run --rm \
  -d \
  --name $CONTAINER_NAME \
  -v $(pwd):$WORKDIR \
  -p 3000:3000 \
  $IMAGE_NAME \
  tail -f /dev/null
  

docker exec -it $CONTAINER_NAME /bin/sh

docker stop $CONTAINER_NAME