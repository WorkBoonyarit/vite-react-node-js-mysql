const { Sequelize, DataTypes, Model } = require('sequelize');
import { db } from "../bootstrapDatabase";

export const exampleModel = db.define('example', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
    ip_address: { type: Sequelize.STRING },
}, {
    tableName: 'example',
    freezeTableName: true,

});