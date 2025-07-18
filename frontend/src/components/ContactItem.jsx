import React from 'react';

const ContactItem = ({ contact }) => (
  <div className="contact-item">
    <h3>{contact.name}</h3>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
  </div>
);

export default ContactItem;
