const env = process.env;

let prod = {
  port: env.PORT,
  jwtPass: env.EDjwtPass,
  adminPassword: env.EdChiefAdminPassword,
  adminStateCode: "arthurandcmc",

  db: { connectionString: env.DATABASE_URL } // db name = pgsql
};

let dev = {
  // db name = pgsql
  port: 8080,
  jwtPass: "princearthur",
  adminPassword: "princearthur",
  adminStateCode: "arthurandcmc",
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
