import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import swaggerUI from   "swagger-ui-express"
import "dotenv/config"
import users from "./routes/Users.js"

const app = express()
app.use(express.json());
app.use(cors())
app.use("/docs",swaggerUI.serve,swaggerUI.setup())
/*swager mediante un ruta genera una adocumentacion,
con el metodo serve proporciona un handler para manejar documentacion en el archivo que pide swager
setup() en esta funcion definiremos un objeto de configuracion de datos predeterminados para swager*/
app.use("/api/usuarios-colegio", users);

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
