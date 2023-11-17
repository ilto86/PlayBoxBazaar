import { useState } from 'react'

import HeroArea from './components/HeroArea/HeroArea.jsx'
import OurServices from './components/OurServices/OurServices.jsx'
import About from './components/About/About.jsx'
import TopSaleProducts from './components/TopSaleProducts/TopSaleProducts.jsx'
import FeatureProducts from './components/FeatureProducts/FeatureProducts.jsx'
import NewArrivalsProduct from './components/NewArrivalsProduct/NewArrivalsProduct.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Info from './components/Info/Info.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
  <>
    <HeroArea />
    <OurServices />
    <About />
    <TopSaleProducts />
    <FeatureProducts />
    <NewArrivalsProduct />
    <Contacts />
    <Testimonials />
    <Info />
    <Footer />
  </>
  )
}

export default App
