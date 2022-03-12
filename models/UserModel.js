import { Sequelize } from "sequelize";

import db from "../config/Database.js";


const Users = db.define('users', {
    name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
    refresh_token : {
        type : Sequelize.TEXT
    },
},{
    freezeTableName : true
})

export default Users