import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    worksInHospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    worksForHours: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0,
        required: true
    },
    worksInHospitals: [hospitalSchema]
}, {timestamps: true});

export const Doctor = mongoose.Model("Doctor", doctorSchema);