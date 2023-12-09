import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as authService from './services/authService'
import AuthContext from './contexts/authContext'

import Home from './components/HeroArea/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Products from './components/Products/Products'
import Contacts from './components/Contacts/Contacts'
import Testimonials from './components/Testimonials/Testimonials'
import CreateConsole from './components/CreateConsole/CreateConsole'
import ConsoleDetails from './components/ConsoleDetails/ConsoleDetails'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Path from './paths'



function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.login(values.email, values.password);

        setAuth(result)
        
        navigate(Path.Home)

        console.log(result);
    }

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div className="hero_area">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateConsole />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:consoleId" element={<ConsoleDetails />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
                <Info />
                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App
