import React from "react";
import "./styles/App.css";
import AddPatient from "./components/AddPatient";
import PriorityList from "./components/PriorityList";
import TreatPatient from "./components/TreatPatient";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Patient Management System</h1>
      <AddPatient />
      <PriorityList />
      <TreatPatient />
    </div>
  );
}

export default App;