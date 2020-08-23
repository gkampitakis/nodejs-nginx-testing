# nodejs-nginx-testing




RUN npm install pm2 -g
ENV 
ENV 

CMD ["pm2-runtime", "app.js"]


Command:

docker run -p 4000:4000 --rm --name pm2 -e PM2_PUBLIC_KEY=6k1ug85enwxssd8 -e PM2_SECRET_KEY=aesspt1265hin8f server:pm2 

docker exec -it pm2 sh

pm2 logs 


sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)


https://medium.com/@kcabading/getting-a-free-domain-for-your-ec2-instance-3ac2955b0a2f

pm2 start <config> --env prod