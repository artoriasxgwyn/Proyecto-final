import users from "../models/Users.js";
import bcrypt from "bcryptjs";
import { generarJWT } from "../middlewares/JWT.js";

/*
{
  "numeroDocumento":"elian",
  "password":"ryomen445"
}
*/
async function sign_in(req, res) {
    try {
        const { numeroDocumento, password } = req.body
        const user = await users.findOne({ numeroDocumento })
        if (!user) {
            return res.send("usuario no exite").status(400);
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.send("contaseña incorrecta").status(400);
        }
        generarJWT(user._id)
            .then((x) => {
                return res.send(`si exite el usuario: ${x}`);
            })
    }
    catch (e) {
        console.log(e)
        return res.json(e)
    }
}

export default sign_in;