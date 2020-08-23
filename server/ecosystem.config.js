module.exports = [{
  script: 'server.js',
  name: 'Template Server',
  exec_mode: 'cluster',
  instances: 2,
  env_prod: {
    NODE_ENV: "prod",
    PM2_PUBLIC_KEY: "6k1ug85enwxssd8",
    PM2_SECRET_KEY: "aesspt1265hin8f"
  }
}];