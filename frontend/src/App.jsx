import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
    <ContactProvider>
      <div className="container">
        <Header />
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
}

export default App;
