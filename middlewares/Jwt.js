import jwt from 'jsonwebtoken';
import users from "../models/Users.js";

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: "4h"
        },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se pudo generar el token")
                } else {
                    resolve(token)
                }
            })
    })
}


const validar = async (req, res, next) => {
    try {
        const token = req.header("x-token");
        const uid = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        let user = await users.findById(uid.uid);
        req.uid = uid;

        if (!token) {
            return res.status(401).json({
                msg: "No hay token en la peticion"
            })
        };
        /*
        if (!user.isActive) {
            return res.status(401).json({
                msg: "El usuario no esta activo"
            })
        };*/
        if (!user) {
            return res.status(401).json({
                msg: "usuario no existe"
            })
        };
        next();
    } catch (error) {
        res.status(401).json({
            msg: "token no valido"
        })
    }
}

export { validar, generarJWT }