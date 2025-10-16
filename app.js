import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import signUp from "./routes/SignUp.js"
import users from "./routes/Users.js"

const app = express()
app.use(express.json());
app.use(cors())
app.use("/api/iniciarSesion", users);
app.use("/api/registrarse", signUp);

app.listen(process.env.PORT, () => {
    try {
        console.log(`Ay Dios ${process.env.PORT}`);
        mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log("perdon mami")
            })
    } catch (error) {
        console.log(error)
    }
});
