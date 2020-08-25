#!/bin/sh

git pull

npm install --no-package-lock

pm2 reload ecosystem.config.js --env prod