import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts, loading, error } = useContext(ContactContext);

  return (
    <div className="contact-list">
      <h2>Your Contacts</h2>
      {loading ? (
        <p>Loading contacts...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default ContactList;
