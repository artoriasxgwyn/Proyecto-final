import express from "express";
import { body } from "express-validator";
import signIn from "../controllers/SignIn.js";
import seeValidations from "../helpers/SeeValidations.js";

const router = express.Router();

const validations = [
    body("numeroDocumento").notEmpty().escape().isNumeric().isLength({
        min: 10,
        max: 10
    }).escape(),
    body("password").notEmpty().escape()
];

router.post("/", validations, seeValidations, signIn);

export default router;
