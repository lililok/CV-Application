import React, { useState, useEffect } from 'react';
import '../styles/forms.css';
import '../styles/render.css';

function GeneralForm({ onSubmit, initialData }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name || '');
            setEmail(initialData.email || '');
            setPhone(initialData.phone || '');
        }
    }, [initialData]);

    const handleGeneralFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, email, phone });
        setName("");
        setEmail("");
        setPhone("");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    return (
        <>
        <h3>{initialData ? 'Edit General' : 'General'}</h3>
        <form className="generalForm" onSubmit={handleGeneralFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={handleNameChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

function GeneralRender({ general, onEdit }) {
    return (
        <>
        {general && (
                <div className="generalRender">
                    <p><strong>Name:</strong> {general.name}</p>
                    <p><strong>Email:</strong> {general.email}</p>
                    <p><strong>Phone:</strong> {general.phone}</p>
                    <button onClick={onEdit}>Edit</button>
                </div>
            )}
        </>
    )
}

export {GeneralForm, GeneralRender};