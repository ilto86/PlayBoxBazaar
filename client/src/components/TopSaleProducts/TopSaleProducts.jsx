import { useEffect, useState } from "react";

import * as consoleService from '../../services/consoleService.js';
import TopSaleProductsItem from "./TopSaleProductsItem/TopSaleProductsItem.jsx";




export default function TopSaleProducts() {
    const [consoles, setConsoles] = useState([]);

    useEffect(() => {
        consoleService.getAll()
            .then(result => setConsoles(result))
    }, []);

    console.log(consoles);

    return ( 
    <>
        {/* Top Sale product section */}
        <section className="product_section ">

            <div className="container">

                <div className="product_heading">
                    <h2>Top Sale Watches</h2>
                </div>

                <div className="product_container">
                    {consoles.map(console => (
                        <TopSaleProductsItem key={console._id} {...console} />
                    ))}

                    {consoles.length === 0 && (
                        <h3 className="no-articles">No articles yet</h3>
                    )}

                    {/* <div className="box">
                        <div className="box-content">
                        <div className="img-box">
                            <img src="images/w1.png" alt="" />
                            <img src="images/Playstation/PS5-Console-wController(2).jpg" alt="" />
                        </div>
                        <div className="detail-box">
                            <div className="text">
                            <h6>Men's Watch</h6>
                            <h5>
                                <span>€</span> 300
                            </h5>
                            </div>
                            <div className="like">
                            <h6>Like</h6>
                            <div className="star_container">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="btn-box">
                        <a href="">Add To Cart</a>
                        </div>
                    </div> */}

                    {/* <div className="box">
                        <div className="box-content">
                        <div className="img-box">
                            <img src="images/w2.png" alt="" />
                            <img src="images/Playstation/PS3-Console-wController.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                            <div className="text">
                            <h6>Men's Watch</h6>
                            <h5>
                                <span>€</span> 300
                            </h5>
                            </div>
                            <div className="like">
                            <h6>Like</h6>
                            <div className="star_container">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="btn-box">
                        <a href="">Add To Cart</a>
                        </div>
                    </div> */}

                    {/* <div className="box">
                        
                        <div className="box-content">

                            <div className="img-box">
                                <img src="images/w3.png" alt="" />
                                <img src="images/Playstation/PS4-Console-wController.jpg" alt="" />
                            </div>

                            <div className="detail-box">

                                <div className="text">
                                    <h6>Men's Watch</h6>
                                    <h5>
                                        <span>€</span> 300
                                    </h5>
                                </div>

                                <div className="like">
                                    <h6>Like</h6>
                                    <div className="star_container">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                    </div>
                                </div>

                            </div>
                        
                        </div>

                        <div className="btn-box">
                            <a href="">Add To Cart</a>
                        </div>

                    </div> */}
            
                </div>
            </div>
        </section>
        {/* Top Sale end product section */}
    </>
    )
}