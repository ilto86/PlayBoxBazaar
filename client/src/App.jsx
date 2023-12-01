// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HeroArea from './components/HeroArea/HeroArea.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Products from './components/Products/Products.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import CreateConsole from './components/CreateConsole/CreateConsole.jsx'
import ConsoleDetails from './components/ConsoleDetails/ConsoleDetails.jsx'
import Info from './components/Info/Info.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
    return (
        <>
            <div className="hero_area">
                <Header />
                <Routes>
                    <Route path="/" element={<HeroArea />} />
                    <Route path="/create" element={<CreateConsole />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:consoleId" element={<ConsoleDetails />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
                <Info />
                <Footer />
            </div>
        </>
    )
}

export default App
