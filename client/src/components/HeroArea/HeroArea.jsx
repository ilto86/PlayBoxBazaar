import Header from '../Header/Header.jsx'
import Slider from '../Slider/Slider.jsx'
import OurServices from '../OurServices/OurServices.jsx'
import Info from '../Info/Info.jsx'
import Footer from '../Footer/Footer.jsx'

export default function HeroArea() {
    return (
    <>
    <div className="hero_area">
        <Header className="navbar navbar_expand_lg" />
        <Slider />
        <OurServices />
        <Info />
        <Footer />
    </div>
    </>
    )
}