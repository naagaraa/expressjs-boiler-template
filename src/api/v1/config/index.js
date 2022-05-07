import { DataSource } from "typeorm";

const db1DataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "db1",
  entities: [__dirname + "/entity/*{.js,.ts}"],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

module.exports = db1DataSource;
