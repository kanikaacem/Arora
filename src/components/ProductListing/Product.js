import { useState } from "react";
import { Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from "react-router-dom";
const Product = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="productContainer"
            style={{ position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>navigate("/product-description")}
        >
            <div className="productImageContainer">
                <img className="productImage"
                    src="https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/s/l/sl-rs-greensaree_3_.jpg"
                    alt="Image" 
                    loading="lazy"/>
            </div>
            <div className="productDetails d-flex flex-column gap-2 my-2">
                <strong>
                    <a href="/product-description" className="productName"> Marvelous Black Plain Silk Ready-Made Crop Top Palazzo With Jack
                    </a>
                </strong>
                <div className="ratings-and-reviews d-flex gap-2 align-items-center">
                    <Rating initialValue="3"
                    readonly={true}
                    size="20px"/>
                    <span>11 </span>
                </div>
                <strong className="productPrice">
                    Rs. 23,000
                </strong>
                <Badge bg="secondary" className="productNewLabel">New</Badge>
                <div
                    className={`actionButtonWrapper ${isHovered ? "showProductAction" : ""
                        }`}
                >
                    <div className="productAction d-flex justify-content-center">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add To Cart</Tooltip>}>
                            <Button variant="light">klkl</Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add To Wishlist</Tooltip>}>
                            <Button variant="light">jk</Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add To Compare</Tooltip>}>
                            <Button variant="light">klkl</Button>
                        </OverlayTrigger>
                    </div>
                </div>

            </div>

        </div >
    )
}
export default Product;