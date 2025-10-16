import users from "../models/Users.js";
import { generarJWT } from "../middlewares/JWT.js"
import bcrypt from "bcryptjs"
/*
 {
  "nombres":"johann",
  "apellidos":"",
  "tipoDocumento":"",
  "numeroDocumento":"",
  "email":"",
  "password":"",
  "telefono":"",
  "direccion":"",
  "fechaNacimiento":"",
  "genero":"",
  "rol":"",
  "estrato":"",
  "sisben":"",
  "eps":"",
  "tipoSangre":"",
  "poblacionVictima":true,
  "discapacidad":"",
  "etnia":"",
  "fotoPerfil":"",
  "firmaDigital":"",
  "colegio":"4edd40c86762e0fb12000003"
}
*/
async function signUp(req, res) {
    try {
        let { nombres, apellidos, tipoDocumento, numeroDocumento, email, password, telefono, direccion, fechaNacimiento, genero, estrato, sisben, eps, tipoSangre, poblacionVictima, discapacidad, etnia, fotoPerfil, firmaDigital, colegio } = req.body
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt)
        const user = new users({  nombres, apellidos, tipoDocumento, numeroDocumento, email, password, telefono, direccion, fechaNacimiento, genero, estrato, sisben, eps, tipoSangre, poblacionVictima, discapacidad, etnia, fotoPerfil, firmaDigital, colegio  });
        await user.save()
        generarJWT(user._id)
            .then((x) => {
                console.log(x)
                res.send(x)
            })
        console.log(user)
    } catch (error) {
        res.send("error").status(400)
        console.log(error)
    }

}
async function getUsers(req, res) {
    try {
        const users = await users.find();
        console.log(users)
        res.json({ users });

    } catch (error) {
        res.send("error").status(400)
        console.log(error)
    }

}
export { signUp, getUsers } 