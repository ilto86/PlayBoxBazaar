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
import Register from './components/Register/Register'
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
    };

    const registerSubmitHandler = async (values) => {
        console.log(values);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username,
    }

    return (
        <AuthContext.Provider value={values}>
            <div className="hero_area">
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Create} element={<CreateConsole />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.About} element={<About />} />
                    <Route path={Path.Products} element={<Products />} />
                    <Route path={Path.ConsoleDetails} element={<ConsoleDetails />} />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.Testimonials} element={<Testimonials />} />
                </Routes>
                <Info />
                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App
