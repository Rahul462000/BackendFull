import mongoose from "mongoose";

const workInHositalWithInHours = new mongoose.Schema({
  workInHopital: {
    type: mongoose.Types.ObjectId,
    ref: "Hospital",
  },
  TimeInHodpital: {
    required: true,
    type: Numbers,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    workInHopitals: [workInHositalWithInHours],
  },
  { timeStamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
