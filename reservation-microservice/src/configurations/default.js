module.exports = {
  database: {
    development : process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/nodejs-spots',
    production  : ''
  },
}