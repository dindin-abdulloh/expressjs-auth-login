import express from "express";
import { getUser, registerUser, loginUser } from "../controllers/Users.js";

const router = express.Router()

router.get('/users', getUser)
router.post('/users', registerUser)
router.post('/login', loginUser)

export default router