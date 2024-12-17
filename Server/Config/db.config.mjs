import { connect } from "mongoose"
import env from "dotenv"

env.config()

const dbConnect = async () => {
    try {
        const { connection } = await connect(process.env.MONGO_DB_CLOUD, {
            dbName: "user_auth"
        })
        const db = connection.db.databaseName
        console.log("Connected:", db)
    } catch (err) {
        console.log(err)
    }
}

export default dbConnect