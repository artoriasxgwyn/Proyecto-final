import express from "express";
import { body, param } from "express-validator";
import { validar } from "../middlewares/JWT.js";
import functionsUsers from "../controllers/Users.js";
import seeValidations from "../helpers/SeeValidations.js";

const router = express.Router();

const validationsLogin = [
    body("numberDocument").notEmpty().escape().isNumeric().isLength({
        min: 10,
        max: 10
    }).escape(),
    body("password").notEmpty().escape()
];
const validationsRegister = [
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
    body('dateBorn').notEmpty().isDate({ format: 'DD/MM/YYYY', strictMode: true })
        .withMessage('La fecha debe tener formato DD-MM-YYYY'),
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
const validationsChangePassword = [
    body("currentPassword").notEmpty().escape(),
    body("newPassword").notEmpty().escape()
];

router.get("/rol/:rol", validar, param("rol").notEmpty(), seeValidations, functionsUsers.getUsersByRol);
router.get("/:id", validar, param("id").notEmpty(), seeValidations, functionsUsers.getUsersById);
router.post("/registrar", validationsRegister, seeValidations, functionsUsers.register);
router.post("/", validationsLogin, seeValidations, functionsUsers.login);
router.post("/:id/change-password", validar, validationsChangePassword, seeValidations, functionsUsers.changePassword);
router.post("/:id/activar", validar, param("id").notEmpty(), seeValidations, functionsUsers.activateUser);
router.post("/:id/desactivar", validar, param("id").notEmpty(), seeValidations, functionsUsers.desactivateUser);
router.delete("/:id", validar, param("id").notEmpty(), seeValidations, functionsUsers.deleteUser);


/*
 {
  "currentPassword":"ryomen445",
  "newPassword":"RYOMEN445"
}
*/

export default router;