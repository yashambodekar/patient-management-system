import React from "react";
import axios from "axios";

function TreatPatient() {
  const handleTreat = async () => {
    try {
      const response = await axios.delete("http://localhost:5000/api/patients/treat");
      alert(response.data.message);
    } catch (error) {
      alert("Error treating patient");
    }
  };

  return (
    <div>
      <h2>Treat Patient</h2>
      <button onClick={handleTreat}>Treat Highest Priority Patient</button>
    </div>
  );
}

export default TreatPatient;