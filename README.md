# Nodejs Nginx Testing

Nodejs server running on EC2 instance.

## Description 

This repository is a testing case, trying to make a proof of concept and setting a nodejs server on EC2 instance.

## Goals

- Automatic deployment on push event.
- Set domain on AWS Route53 and point it to EC2 instance. [Guide](https://medium.com/@kcabading/getting-a-free-domain-for-your-ec2-instance-3ac2955b0a2f)
- Create github action and connect with ssh to ec2 instance and deploy [Guide](https://blog.soshace.com/deploying-your-nodejs-code-to-a-server-every-time-you-push-with-github-actions/)
- Set metrics and monitoring through PM2.
- SSH to EC2 instance with password [Guide 1](https://www.serverkaka.com/2018/08/enable-password-authentication-aws-ec2-instance.html)
[Guide 2](https://medium.com/@as.vignesh/enable-password-authentication-for-amazon-linux-ec2-instance-16899bc38305)

## Tools 

- [PM2](https://pm2.keymetrics.io/)
- Docker
- Docker Compose
- Nginx [Image used](https://hub.docker.com/r/byjg/nginx-extras/)
- AWS

## Useful commands

- Run docker compose `docker-compose up -d`.
- `pm2 --help` 
- `pm2 link <public key> <secret key>`

## SSL setup on EC2 instance

### Useful commands 
- Install nginx on EC2 instance by running `sudo amazon-linux-extras nginx1`
  Replace `/etc/nginx/nginx.conf` with [nginx.conf](./nginx.conf)
- Test nginx configuration is correct by running `nginx -t`
- Restart nginx to pull new configuration `systemctl restart nginx`
- Install certbot by running `sudo yum install -y certbot python2-certbot-nginx`
- Run certbot `sudo certbot --nginx` and follow prompt messages
- Set up cron job `crontab -e`. AWS recommends running this `39      1,13    *       *       *       root    certbot renew --no-self-upgrade`. But not yet tested
- Check cron jobs set with `crontab -l`