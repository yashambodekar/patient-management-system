const express = require("express");
const PriorityQueue = require("../models/PriorityQueue");
const Patient = require("../models/Patient");

const router = express.Router();
const pq = new PriorityQueue();  // Create an instance of Priority Queue

// Add a new patient
router.post("/add", async (req, res) => {
  try {
    const { name, age, severity } = req.body;

    if (!name || !age || severity === undefined) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newPatient = new Patient({ name, age, severity });
    await newPatient.save();

    // Add patient to Priority Queue
    pq.enqueue(newPatient);

    res.status(201).json({ message: "Patient added successfully", newPatient });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get priority queue patients
router.get("/priority-list", (req, res) => {
  res.status(200).json(pq.queue);
});

// Treat highest priority patient
router.delete("/treat", async (req, res) => {
  try {
    if (pq.isEmpty()) {
      return res.status(404).json({ message: "No patients to treat" });
    }

    const treatedPatient = pq.dequeue();

    // Remove from database as well
    await Patient.findByIdAndDelete(treatedPatient._id);

    res.status(200).json({ message: `Treated patient: ${treatedPatient.name}`, treatedPatient });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
