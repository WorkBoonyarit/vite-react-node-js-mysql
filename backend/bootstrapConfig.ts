import * as dotenv from "dotenv"
dotenv.config();

export const Config = {
    dbName: process.env.DB_DATABASE_NAME as string,
    dbUser: process.env.DB_USERNAME as string,
    dbPass: process.env.DB_PASSWORD as string,
    dbHost: process.env.DB_HOST as string,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET as string,
    jwtLife: process.env.JWT_LIFE as string,
}