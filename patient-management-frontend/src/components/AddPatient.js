import React, { useState } from "react";
import axios from "axios";

function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    symptoms: "",
    severity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/patients/add", formData);
      alert(response.data.message);
      setFormData({ name: "", age: "", contact: "", symptoms: "", severity: 1 });
    } catch (error) {
      alert("Error adding patient");
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="severity"
          placeholder="Severity (1-5)"
          value={formData.severity}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;