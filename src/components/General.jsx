import React from 'react';
import { useState } from 'react';

function GeneralForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [general, setGeneral] = useState({});

    const handleGeneralFormSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        setGeneral({ name, email, phone });
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
        <h3>General</h3>
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

export default GeneralForm;