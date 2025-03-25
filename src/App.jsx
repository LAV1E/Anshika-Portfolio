import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import { Contact } from 'lucide-react'


const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contacts/>
    </div>
  )
}

export default App
