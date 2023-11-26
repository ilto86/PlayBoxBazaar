import styles from './Slider.module.css';


export default function Slider() {
    return (
    <>
        {/* slider section */}
        <section className="slider_section " >
            <div className="slider_bg_box">
            <img src="images/Playstation/PS5-image.webp" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="container " >
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box" style={{ color: "coral" }}>
                        <h1>Stylish Watches</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Minus quidem maiores perspiciatis, illo maxime voluptatem
                            a itaque suscipit.
                        </p>
                        <div className="btn-box">
                            <a href="" className="btn1">
                            Contact Us
                            </a>
                            <a href="" className="btn2">
                            About Us
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container ">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box" style={{ color: "blue" }}>
                        <h1>Stylish Watches</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Minus quidem maiores perspiciatis, illo maxime voluptatem
                            a itaque suscipit.
                        </p>
                        <div className="btn-box">
                            <a href="" className="btn1">
                            Contact Us
                            </a>
                            <a href="" className="btn2">
                            About Us
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container ">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box"  style={{ color: "green" }}>
                        <h1>Stylish Watches</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Minus quidem maiores perspiciatis, illo maxime voluptatem
                            a itaque suscipit.
                        </p>
                        <div className="btn-box">
                            <a href="" className="btn1">
                            Contact Us
                            </a>
                            <a href="" className="btn2">
                            About Us
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container ">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box" style={{ color: "red" }}>
                        <h1>Stylish Watches</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Minus quidem maiores perspiciatis, illo maxime voluptatem
                            a itaque suscipit.
                        </p>
                        <div className="btn-box">
                            <a href="" className="btn1">
                            Contact Us
                            </a>
                            <a href="" className="btn2">
                            About Us
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container ">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box" style={{ color: "darkblue" }}>
                        <h1>Stylish Watches</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Minus quidem maiores perspiciatis, illo maxime voluptatem
                            a itaque suscipit.
                        </p>
                        <div className="btn-box">
                            <a href="" className="btn1">
                            Contact Us
                            </a>
                            <a href="" className="btn2">
                            About Us
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <ol className="carousel-indicators" style={{ color: "coral" }}>
                <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
                style={{ backgroundColor: "coral" }}
                />
                <li data-target="#customCarousel1" data-slide-to={1} style={{ backgroundColor: "blue" }} />
                <li data-target="#customCarousel1" data-slide-to={2} style={{ backgroundColor: "green" }} />
                <li data-target="#customCarousel1" data-slide-to={3} style={{ backgroundColor: "red" }} />
                <li data-target="#customCarousel1" data-slide-to={4} style={{ backgroundColor: "darkblue" }} />
            </ol>
            </div>
        </section>
        {/* end slider section */}
    </>
    )
}