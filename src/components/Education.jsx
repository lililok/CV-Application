import React, { useState, useEffect } from 'react';
import '../styles/forms.css';
import '../styles/render.css';

function EducationForm({ onSubmit, initialData }) {
    const [school, setSchool] = useState('');
    const [titleStudy, setTitleStudy] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (initialData) {
            setSchool(initialData.school || '');
            setTitleStudy(initialData.titleStudy || '');
            setDate(initialData.date || '');
        }
    }, [initialData]);

    const handleEducationFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({ school, titleStudy, date });
        setSchool("");
        setTitleStudy("");
        setDate("");
    }

    const handleSchoolChange = (event) => {
        setSchool(event.target.value);
    }

    const handleTitleStudyChange = (event) => {
        setTitleStudy(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <>
        <h3>{initialData ? 'Edit Education' : 'Education'}</h3>
        <form className="educationForm" onSubmit={handleEducationFormSubmit}>
            <label htmlFor="school">School:</label>
            <input type="text" value={school} onChange={handleSchoolChange} required />
            <label htmlFor="titleStudy">Title study:</label>
            <input type="text" value={titleStudy} onChange={handleTitleStudyChange} required />
            <label htmlFor="date">Date:</label>
            <input type="date" value={date} onChange={handleDateChange} required />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

function EducationRender({ education, onEdit }) {
    return (
        <>
        {education && (
                <div className="educationRender">
                    <p><strong>School:</strong> {education.school}</p>
                    <p><strong>Title study:</strong> {education.titleStudy}</p>
                    <p><strong>Date:</strong> {education.date}</p>
                    <button onClick={onEdit}>Edit</button>
                </div>
            )}
        </>
    )
}

export {EducationForm, EducationRender};