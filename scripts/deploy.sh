#!/bin/sh

cd ../server

git pull

npm install

pm2 reload ecosystem.config.js --env prod