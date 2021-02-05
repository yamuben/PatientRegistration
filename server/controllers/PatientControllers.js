import patientInfos from "../models/Patient";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";

export const createPatient = async (req, res) => {
  const newPatient = await patientInfos.create(req.body);

  res.status(201).json({
    status: "success",
    newPatient,
  });
};

export const getPatient = catchAsync(async (req, res, next) => {
  const patient = await patientInfos.findById(req.params.id);
  if (!patient)
    return next(new AppError(404, "No patient found with that ID."));
  res.status(200).json({
    status: "success",
    data: {
      patient,
    },
  });
});
