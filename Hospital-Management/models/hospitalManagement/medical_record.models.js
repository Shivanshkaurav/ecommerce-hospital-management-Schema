import mongoose from 'mongoose';

const medicalRecord = new mongoose.Schema({}, {timestamps: true});

export const MedicalRecord = mongoose.Model("MedicalRecord", medicalRecord);