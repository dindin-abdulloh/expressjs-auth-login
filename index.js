import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from 'dotenv'
// import Users from "./models/UserModel.js";
const app = express()
dotenv.config()

try {
    await db.authenticate()
    console.log("Database connected");
    // await Users.sync()
} catch (error) {
    console.log(error);
}

app.use(express.json())
app.use(router)

app.listen(5000, () => console.log("server berjalan"))