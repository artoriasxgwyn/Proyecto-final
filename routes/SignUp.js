import expres from "express";
import { body } from "express-validator";
import { signUp } from "../controllers/SignUp.js"
import { validar } from "../middlewares/JWT.js";
import seeVedalidations from "../helpers/SeeValidations.js";

const router = expres()
const validations = [
    body("nombres").notEmpty().escape(),
    body("apellidos").notEmpty().escape(),
    body("tipoDocumento").notEmpty().escape(),
    body("numeroDocumento").notEmpty().isNumeric().escape().isLength({
        min: 10
    }),
    body("email").notEmpty().isEmail().escape(),
    body("password").notEmpty().escape(),
    body("telefono").notEmpty().isNumeric().escape().isLength({
        min: 10,
        max: 10
    }),
    body("direccion").notEmpty().escape(),
    body("fechaNacimiento").notEmpty().escape().isAlphanumeric(),
    body("genero").notEmpty().escape(),
    body("rol").notEmpty().escape(),
    body("estrato").notEmpty().escape(),
    body("sisben").notEmpty().escape(),
    body("eps").notEmpty().escape(),
    body("tipoSangre").notEmpty().escape(),
    body("poblacionVictima").notEmpty().isBoolean().escape(),
    body("discapacidad").notEmpty().escape(),
    body("etnia").notEmpty().escape(),
    body("fotoPerfil").notEmpty().escape(),
    body("firmaDigital").notEmpty().escape(),
    body("colegio").notEmpty().escape(),
];
router.post("/", validations, seeVedalidations, signUp)

export default router;