import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header title="Contacts List Application" />
      <Body />
      <Footer author="Arbaaz Meghani" source="https://github.com/ArbaazMeghani/contacts-web-app"/>
    </div>
  );
}

export default App;
