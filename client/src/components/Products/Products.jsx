import Header from '../Header/Header.jsx'
import TopSaleProducts from '../TopSaleProducts/TopSaleProducts.jsx'
import FeatureProducts from '../FeatureProducts/FeatureProducts.jsx'
import NewArrivalsProducts from '../NewArrivalsProducts/NewArrivalsProducts.jsx'
import Info from '../Info/Info.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Products() {
    return (
    <div className="hero_area">
        <Header />
        <TopSaleProducts />
        <FeatureProducts />
        <NewArrivalsProducts />
        <Info />
        <Footer />
    </div>
    )
}