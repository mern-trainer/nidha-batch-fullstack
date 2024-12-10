import bcrypt from "bcrypt"
import { userCollection } from "../Models/user.model.mjs";
import jwt from "jsonwebtoken"
import env from "dotenv"

env.config()

const signup = async (req, res) => {
    try {
        const { body } = req
        body.password = await bcrypt.hash(body.password, 10);
        const response = await userCollection.create(body)
        if (!response?._id) {
            return res.status(400).send({
                message: "Bad Request"
            })
        }
        response.password = null
        const token = jwt.sign({sub: response}, process.env.JWT_KEY, {expiresIn: "7d"})
        return res.status(201).send({
            message: "user created",
            id: response._id,
            token
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

const login = async (req, res) => {
    return res.status(200).send({message: "Auth success"})
}

export default {
    signup,
    login
}