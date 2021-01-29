import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();

patientRouter.post("/create",patientControl.createPatient);

export default patientRouter;