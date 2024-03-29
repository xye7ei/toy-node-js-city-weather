const config = {
  test: {  // used by jest
    db: {
      user: 'postgres',
      host: 'localhost',
      database: 'template1',
      password: 'postgres',
      port: 5432,
      schema: 'city',
    },
    app: {
      port: 8080
    },
    api: {
      weather: {
        url: 'https://api.openweathermap.org/data/2.5/',
        appid: '49368754dd6047dfa65562f7eda366b4',
      }
    },
  },
  dev: {
    db: {
      user: 'postgres',
      host: 'localhost',
      database: 'template1',
      password: 'postgres',
      port: 5432,
      schema: 'city',
    },
    app: {
      port: 8080
    },
    api: {
      weather: {
        url: 'https://api.openweathermap.org/data/2.5/',
        appid: '49368754dd6047dfa65562f7eda366b4',
      }
    },
  },
  prod: {
    db: {
      // connection config to production DB server, which is configured
      // and started completely separately
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      schema: process.env.PG_SCHEMA,
    },
    app: {
      port: process.env.APP_PORT,
    },
    api: {
      weather: {
        url: 'https://api.openweathermap.org/data/2.5/',
        appid: process.env.OPENWEATHER_APPID,
      }
    },
  },
}

module.exports = config;