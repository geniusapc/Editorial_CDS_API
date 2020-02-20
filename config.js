const env = process.env;

let prod = {
  port: env.PORT,
  jwtPass: env.EDjwtPass,
  adminPassword: env.EdChiefAdminPassword,
  adminStateCode: "arthurandcmc",

  cloudinary: {
    cloud_name: env.cloud_name,
    api_key: env.api_key,
    api_secret: env.api_secret
  },

  db: { connectionString: env.DATABASE_URL }
};

let dev = {
  port: 8080,
  jwtPass: "princearthur",
  adminPassword: "princearthur",
  adminStateCode: "arthurandcmc",

  cloudinary: {
    cloud_name: "youngenius",
    api_key: "137797677181388",
    api_secret: "eNEbjfAfZfygkspbOdPw0I8k7dg"
  },

  db: {
    host: "localhost",
    user: "postgres",
    database: "editorial",
    password: "youngenius"
  }
};

if (process.env.NODE_ENV == "production") {
  module.exports = prod;
} else {
  module.exports = dev;
}
