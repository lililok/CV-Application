import './styles/App.css'
import React, { useState } from 'react';
import { GeneralForm, GeneralRender } from "./components/General.jsx";
import { EducationForm, EducationRender } from "./components/Education.jsx";
import { PracticeForm, PracticeRender } from "./components/Practice.jsx";

function App() {
  const [general, setGeneral] = useState(null);
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [education, setEducation] = useState(null);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [practice, setPractice] = useState(null);
  const [isEditingPractice, setIsEditingPractice] = useState(false);

  const handleGeneralSubmit = (generalFormData) => {
    setGeneral(generalFormData);
    setIsEditingGeneral(false);
  }

  const handleGeneralEdit = () => {
    setIsEditingGeneral(true);
}

  const handleEducationSubmit = (educationFormData) => {
    setEducation(educationFormData);
    setIsEditingEducation(false);
  }

  const handleEducationEdit = () => {
    setIsEditingEducation(true);
  }

  const handlePracticeSubmit = (practiceFormData) => {
    setPractice(practiceFormData);
    setIsEditingPractice(false);
  }

  const handlePracticeEdit = () => {
    setIsEditingPractice(true);
  }

  return (
    <>
      <div className="forms">
      {isEditingGeneral ? (
                    <GeneralForm onSubmit={handleGeneralSubmit} initialData={general} />
                ) : (
                    <GeneralForm onSubmit={handleGeneralSubmit} />
                )}
      {isEditingEducation ? (
                    <EducationForm onSubmit={handleEducationSubmit} initialData={education} />
                ) : (
                    <EducationForm onSubmit={handleEducationSubmit} />
                )}
      {isEditingPractice ? (
                    <PracticeForm onSubmit={handlePracticeSubmit} initialData={practice} />
                ) : (
                    <PracticeForm onSubmit={handlePracticeSubmit} />
                )}
      </div>
      <div className="render">
      <h3>Resume</h3>
        <GeneralRender general={general} onEdit={handleGeneralEdit}/>
        <EducationRender education={education} onEdit={handleEducationEdit}/>
        <PracticeRender practice={practice} onEdit={handlePracticeEdit}/>
      </div>
    </>
  )
}

export default App
