import express from "express";
import { body, param } from "express-validator";
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
router.get("/rol/:rol",param("rol").isEmpty(),seeValidations,functionsUsers.getUsersByRol);
router.get("/:id",param("id").isEmpty(),seeValidations,functionsUsers.getUsersById)
router.post("/", validations, seeValidations, functionsUsers.login);

export default router;
