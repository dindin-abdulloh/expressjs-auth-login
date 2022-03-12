import express from "express";
import { getUser, registerUser, loginUser, logoutUser } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router()

router.get('/users', verifyToken, getUser)
router.post('/users', registerUser)
router.post('/login', loginUser)
router.get('/token', refreshToken)
router.delete('/logout', logoutUser)

export default router