import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

const Record = mongoose.model("Record", medicalRecordSchema);
