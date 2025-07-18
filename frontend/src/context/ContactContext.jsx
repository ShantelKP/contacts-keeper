import React, { createContext, useState, useEffect } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/contacts');
        if (!res.ok) throw new Error('Failed to fetch contacts');
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Add contact via backend
  const addContact = async contact => {
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      });
      if (!res.ok) throw new Error('Failed to add contact');
      const newContact = await res.json();
      setContacts(prev => [...prev, newContact]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, loading, error }}>
      {children}
    </ContactContext.Provider>
  );
};
