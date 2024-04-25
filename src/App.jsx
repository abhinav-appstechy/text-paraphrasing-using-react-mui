import { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Header />
    <Home />
    <AboutUs />
    <ContactUs />
    <Footer />
      
    </>
  )
}

export default App
