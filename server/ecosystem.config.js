module.exports = [{
  script: 'server.js',
  name: 'Template Server',
  exec_mode: 'cluster',
  instances: 2,
  env_prod: {
    NODE_ENV: "prod",
    PM2_PUBLIC_KEY: "cguc3spxg8qvl7l",
    PM2_SECRET_KEY: "0am6yz3a3wa69dc"
  }
}];