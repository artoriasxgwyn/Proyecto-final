import express from "express";
import { body } from "express-validator";
import functionsUsers from "../controllers/Users.js";
import seeValidations from "../helpers/SeeValidations.js";

const router = express.Router();

const validations = [
    body("numeroDocumento").notEmpty().escape().isNumeric().isLength({
        min: 10,
        max: 10
    }).escape(),
    body("password").notEmpty().escape()
];
router.get("/",functionsUsers.getUsersByRol);
router.post("/", validations, seeValidations, functionsUsers.signIn);

export default router;
