import users from "../models/Users.js";
import { generarJWT } from "../middlewares/JWT.js"
import bcrypt from "bcryptjs"
/*
 {
  "names":"johann",
  "lastNames":"",
  "typeDocument":"",
  "numberDocument":"",
  "email":"",
  "password":"",
  "cellphone":"",
  "direction":"",
  "dateBorn":"",
  "gender":"",
  "role":"",
  "estratum":"",
  "sisben":"",
  "eps":"",
  "typeBlood":"",
  "victimPopulation":true,
  "disability":"",
  "ethnic":"",
  "profilePhoto":"",
  "signDigital":"",
  "college":"4edd40c86762e0fb12000003"
}
*/
async function signUp(req, res) {
    try {
        let { names, lastNames, typeDocument, numberDocument, email, password, cellphone, direction, dateBorn, gender, role, estratum, sisben, eps, typeBlood, victimPopulation, disability, ethnic, profilePhoto, signDigital, college } = req.body
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt)
        const user = new users({ names, lastNames, typeDocument, numberDocument, email, password, cellphone, direction, dateBorn, gender, role, estratum, sisben, eps, typeBlood, victimPopulation, disability, ethnic, profilePhoto, signDigital, college });
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

export { signUp } 