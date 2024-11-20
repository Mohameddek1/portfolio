import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Project from './components/Project/Project'


function App() {

  return (
    <>
      <div className=' bg-gray-100'>

       <Navbar />

       <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/portfolio/about' element={<About/>} />
        <Route path='/portfolio/contacts' element={<Contacts/>} />
        <Route path='/portfolio/projects' element={<Project/>} />
       </Routes>


      </div>
     
    </>

   
  )
}

export default App
