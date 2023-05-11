const { Sequelize, DataTypes, Model } = require('sequelize');
import { db } from "../bootstrapDatabase";

export const userModel = db.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
}, {
    tableName: 'users',
    freezeTableName: true,

});