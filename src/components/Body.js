import React from 'react';
import ContactsList from './ContactsList';
import NewContact from './NewContact';

function Body() {
  return (
    <div>
      <ContactsList />
      <NewContact />
    </div>
  );
}

export default Body;