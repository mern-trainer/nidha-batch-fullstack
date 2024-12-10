import jwt from "jsonwebtoken"
import env from "dotenv"

env.config()

export const Auth = async (req, res, next) => {
    try {
        const tokenData = req.headers["authorization"]
        const [_, token] = tokenData?.split(" ")
        const response = jwt.verify(token, process.env.JWT_KEY)
        const currentTime = Math.floor(new Date().getTime() / 1000)
        if (response.exp <= currentTime) {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        next()
    } catch (err) {
        console.log(err)
        if (err.message == "jwt malformed") {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}