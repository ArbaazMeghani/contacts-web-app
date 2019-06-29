import React from 'react';
import ContactsList from './ContactsList';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header title="Contacts List Application" />
      <ContactsList />
      <Footer />
    </div>
  );
}

export default App;
