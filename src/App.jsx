// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HeroArea from './components/HeroArea/HeroArea.jsx'
// import OurServices from './components/OurServices/OurServices.jsx'
import About from './components/About/About.jsx'
import Products from './components/Products/Products.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import CreateConsole from './components/CreateConsole/CreateConsole.jsx'
// import Info from './components/Info/Info.jsx'
// import Footer from './components/Footer/Footer.jsx'


function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<HeroArea />} />
            <Route path="/create" element={<CreateConsole />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/testimonials' element={<Testimonials />} />
            {/* <Route path='/info' element={ <Info /> } /> */}
        </Routes>
    </>
    )
}

export default App
