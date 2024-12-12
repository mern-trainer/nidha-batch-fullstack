import { Router } from "express"
import userController from "../Controllers/user.controller.mjs"
import { Auth } from "../Middleware/auth.mjs"

const userRoute = Router()

userRoute.post("/signup", userController.signup)
userRoute.get("/login", userController.login)
userRoute.get("/products", Auth, userController.products)

export default userRoute