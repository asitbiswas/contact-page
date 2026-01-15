import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from "./components/ContactForm/ContactForm"

function App() {

  return (
    <div>
      <main className="main_container">
        <Navigation />
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App
