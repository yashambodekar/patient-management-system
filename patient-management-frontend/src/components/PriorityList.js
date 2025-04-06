import React, { useState, useEffect } from "react";
import axios from "axios";

function PriorityList() {
  const [patients, setPatients] = useState([]);


  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patients/priority-list");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching priority list:", error);
    }
  };

  useEffect(() => {
 
    fetchPatients();

   
    const interval = setInterval(fetchPatients, 5000);

 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Priority List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} - Severity: {patient.severity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriorityList;