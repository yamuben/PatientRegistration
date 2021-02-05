import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();

patientRouter.post("/create", patientControl.createPatient);
patientRouter.get("/:id", patientControl.getPatient);

export default patientRouter;
