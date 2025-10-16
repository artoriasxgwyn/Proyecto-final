import expres from "express";
import { body } from "express-validator";
import { signUp } from "../controllers/SignUp.js"
import { validar } from "../middlewares/JWT.js";
import seeVedalidations from "../helpers/SeeValidations.js";

const router = expres()
const validations = [
    body("names").notEmpty().escape(),
    body("lastNames").notEmpty().escape(),
    body("typeDocument").notEmpty().escape(),
    body("numberDocument").notEmpty().isNumeric().escape().isLength({
        min: 10
    }),
    body("email").notEmpty().isEmail().escape(),
    body("password").notEmpty().escape(),
    body("cellphone").notEmpty().isNumeric().escape().isLength({
        min: 10,
        max: 10
    }),
    body("direction").notEmpty().escape(),
    body("dateBorn").trim().isAlphanumeric().notEmpty().escape(),
    body("gender").notEmpty().escape(),
    body("roles").notEmpty().escape(),
    body("estratum").notEmpty().escape(),
    body("sisben").notEmpty().escape(),
    body("eps").notEmpty().escape(),
    body("typeBlood").notEmpty().escape(),
    body("victimPopulation").notEmpty().isBoolean().escape(),
    body("disability").notEmpty().escape(),
    body("ethnic").notEmpty().escape(),
    body("profilePhoto").notEmpty().escape(),
    body("signDigital").notEmpty().escape(),
    body("college").notEmpty().escape(),
];
router.post("/", validations, seeVedalidations, signUp)

export default router;