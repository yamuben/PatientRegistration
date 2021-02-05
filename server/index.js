import express from "express";
import bodyParser from "body-parser";
import patientRouter from "./routes/PatientRoute";
import globalErrorHandler from "./controllers/errorHandlerController";
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "welcome to patiente registration",
  });
});

app.use("/api/v1/patient", patientRouter);

app.use(globalErrorHandler);

export default app;
