import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import './App.css'

function App() {
  
  return (
    <>
<Navbar2/>
<HomePage/>
<Footer/>
    </>
  )
}

export default App
