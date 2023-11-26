import React, { useState } from 'react';

export default function OurServices() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const h5Style = {
        color: isHovered ? '#8019c8' : 'initial',
        transition: 'color 0.3s',
        cursor: 'pointer', // Optional: Add a pointer cursor on hover
    };

    return (
        <>
            {/* service section */}
            <section className="service_section">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="box ">
                    <div className="img-box">
                        <img src="images/feature-1.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5
                        style={h5Style}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            Fast Delivery
                        </h5>
                        {/* <h5>Fast Delivery</h5> */}
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="box ">
                    <div className="img-box">
                        <img src="images/feature-2.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5
                        style={h5Style}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            Free Shiping
                        </h5>
                        {/* <h5>Free Shiping</h5> */}
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="box ">
                    <div className="img-box">
                        <img src="images/feature-3.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5
                        style={h5Style}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            Best Quality
                        </h5>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="box ">
                    <div className="img-box">
                        <img src="images/feature-4.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5
                        style={h5Style}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            24x7 Customer support
                        </h5>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* end service section */}
        </>
    )
}