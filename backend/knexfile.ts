// DO NOT TOUCH

import path from "path";

const config = {
  client: "mysql2",
  connection: {
    host: "localhost",
    port: "3306",
    user: "eleven",
    password: "eleven11",
    database: "eleven",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "src", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "seeds"),
  },
  pool: {
    min: 2,
    max: 10,
  },
  useNullAsDefault: true,
};

export default config;
