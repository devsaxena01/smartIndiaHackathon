import Router from "express"
import {
    registerUser,
    loginUser,
    logoutUser
 } from "../controllers/user.controller.js"
const router=Router()
router.post("/registerUser",registerUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
export default router