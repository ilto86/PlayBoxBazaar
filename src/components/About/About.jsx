import Header from '../Header/Header.jsx'
import Info from '../Info/Info.jsx'
import Footer from '../Footer/Footer.jsx'

export default function About() {
    return (
    <div className="hero_area">
        <Header />
        {/* about section */}
        <section className="about_section layout_padding">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">
                <div className="img_container">
                <div className="img-box b1">
                    {/* <img src="images/a-1.jpg" alt="" /> */}
                    <img src="images/Playstation/PS1-Console-wController.jpg" alt="" />
                </div>
                <div className="img-box b2">
                    {/* <img src="images/a-2.jpg" alt="" /> */}
                    <img src="images/Playstation/PS5-Console-wController.jpg" alt="" />
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="detail-box">
                <h2>About Our Shop</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum There are
                    many variations of passages of Lorem Ipsum
                </p>
                <a href="">Read More</a>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* end about section */}
        <Info />
        <Footer />
    </div>
    )
}