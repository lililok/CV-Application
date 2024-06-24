import React from 'react';
import './App.css'
import GeneralForm from "./components/General.jsx";

function App() {

  return (
    <>
      <div className="forms">
        <GeneralForm />
        <div className="educationForm">b</div>
        <div className="practiceForm">c</div>
      </div>
      <div className="render">
        <div className="generalRender">a</div>
        <div className="educationRender">b</div>
        <div className="practiceRender">c</div>
      </div>
    </>
  )
}

export default App
