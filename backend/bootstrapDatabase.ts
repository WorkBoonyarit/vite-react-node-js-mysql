import { Sequelize } from "sequelize"
import { Config } from "./bootstrapConfig";


export const db = new Sequelize(Config.dbName, Config.dbUser, Config.dbPass, {
  host: Config.dbHost,
  dialect: 'mysql'
})


const connectDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new Error(`${error}`);
  }
}

connectDatabase();