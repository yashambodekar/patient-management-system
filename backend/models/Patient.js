const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact: String,
    symptoms: String,
    severity: { type: Number, min: 1, max: 5 }, // 1 (Low) - 5 (Critical)
    status: { type: String, enum: ['Waiting', 'Under Treatment', 'Treated'], default: 'Waiting' },
    assignedDoctor: String
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
