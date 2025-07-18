import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) return;
    addContact(contact);
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h2>Add Contact</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={onChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
