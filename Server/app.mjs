import express from "express"
import env from "dotenv"
import dbConnect from "./Config/db.config.mjs"
import userRoute from "./Routes/user.route.mjs"
import cors from "cors"

env.config()

await dbConnect()

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/users", userRoute)

app.listen(process.env.PORT || 8080, err => {
    if (err) {
        return process.exit(1)
    }
    console.log("Running...")
})