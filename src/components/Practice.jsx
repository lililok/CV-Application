import React, { useState, useEffect } from 'react';

function PracticeForm({ onSubmit, initialData }) {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (initialData) {
            setCompany(initialData.company || '');
            setPosition(initialData.position || '');
            setResponsibilities(initialData.responsibilities || '');
            setDate(initialData.date || '');
        }
    }, [initialData]);

    const handlePracticeFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({ company, position, responsibilities, date });
        setCompany("");
        setPosition("");
        setResponsibilities("");
        setDate("");
    }

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    }

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    }

    const handleResponsibilitiesChange = (event) => {
        setResponsibilities(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <>
        <h3>{initialData ? 'Edit Practice' : 'Practice'}</h3>
        <form className="practiceForm" onSubmit={handlePracticeFormSubmit}>
            <label htmlFor="company">Company name:</label>
            <input type="text" value={company} onChange={handleCompanyChange} required />
            <label htmlFor="position">Position title:</label>
            <input type="text" value={position} onChange={handlePositionChange} required />
            <label htmlFor="responsibilities">Main responsibilities:</label>
            <input type="text" value={responsibilities} onChange={handleResponsibilitiesChange} required />
            <label htmlFor="date">Date:</label>
            <input type="date" value={date} onChange={handleDateChange} required />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

function PracticeRender({ practice, onEdit }) {
    return (
        <>
        {practice && (
                <div className="practiceRender">
                    <p><strong>Company name:</strong> {practice.company}</p>
                    <p><strong>Position title:</strong> {practice.position}</p>
                    <p><strong>Main responsibilities:</strong> {practice.responsibilities}</p>
                    <p><strong>Date:</strong> {practice.date}</p>
                    <button onClick={onEdit}>Edit</button>
                </div>
            )}
        </>
    )
}

export { PracticeForm, PracticeRender };