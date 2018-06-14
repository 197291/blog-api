module.exports = {
    port: process.env.PORT || 4000,
    env: process.env.NODE_ENV,
    root: process.env.PWD,
    db: {
      host: '127.0.0.1',
      user: 'yuriy',
      pass: 'suumcuique',
      name: 'yuriy',
      dialect: 'postgres',
      port: 5432
    },
    google: {
      id: '77903113803-5qgqg3i6aa8m9bl3dsurrafvqjj3adcc.apps.googleusercontent.com',
      secret: 'YgcwamRu_P_7HXS1bt7fQQPK',
      callback: 'http://localhost:4000/auth/google/back'
    },
    securityPhrase: 'tasmanianDevil4000',
    saltRounds: 10
}