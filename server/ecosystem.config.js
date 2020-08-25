module.exports = [{
  script: 'server.js',
  name: 'Template Server',
  exec_mode: 'cluster',
  instances: 2,
  env_prod: {
    NODE_ENV: "prod"
  }
}];