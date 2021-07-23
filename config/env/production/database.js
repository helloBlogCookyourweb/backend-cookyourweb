const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password,url } = parse(env("DATABASE_URL","HEROKU_URL"));


  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          url,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
};
