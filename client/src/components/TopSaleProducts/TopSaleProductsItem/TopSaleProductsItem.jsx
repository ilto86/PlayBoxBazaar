export default function TopSaleProductsItem({
    consoleName,
    manufacturer,
    releaseDate,
    storageCapacity,
    color,
    imageUrl,
    price,
}) {
    return(
        <div className="box">
        <div className="box-content">
        <div className="img-box">
            {/* <img src="images/w1.png" alt="" /> */}
            {/* <img src="images/Playstation/PS5-Console-wController(2).jpg" alt="" /> */}
            <img src={imageUrl} alt="" />
        </div>
        <div className="detail-box">
            <div className="text">
            {/* <h6>Men's Watch</h6> */}
            <h6>{consoleName}</h6>

            {/* <h6>{manufacturer}</h6>
            <h6>{releaseDate}</h6>
            <h6>{storageCapacity}</h6>
            <h6>{color}</h6> */}

            <h5>
                {/* <span>€</span> 300 */}
                <span>€</span> {price}
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
    </div>
    );
};