import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ImageSlider from "../components/ProductDescription/ImageSlider";
import { Container } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'

const ProductDescription = () => {
    const productDescription = '<ul><li style="text-align: justify;"><span style="text-align: justify;">Be an&nbsp;absolute royalty of splendor by adoring this Sabyasachi designer beige saree in georgette material embellished with all dual golden sequins work.&nbsp;</span></li><li style="text-align: justify;">Accomplished with similar dual sequins choli.&nbsp;</li><li style="text-align: justify;"><span style="text-align: justify;">The saree surely creates a remarkable look with its sequin motif. Saree showcased by Isha Ambani will surely attract showers of compliment when you will wear it in parties, functions, and weddings.&nbsp;</span></li><li style="text-align: justify;"><span style="text-align: justify;">This beautiful sequin saree online will come in 5.25 meters and length is 43 inches.</span></li></ul>'
return(<section className="product-listing-section">
<Header />
<Container className="d-flex justify-content-center p-4" style={{ maxWidth: "1600px" }}>
    <div className="row w-100">
        <div className="product-images col-6">
        <ImageSlider/>
        </div>
        <div className="product-description col-6">
            <h4 className="product-name fw-semibold">Sabyasachi Golden Sequins Georgette Party Wear Saree With Blouse</h4>
            <div className="ratings-and-reviews d-flex gap-2 align-items-center">
            <Rating initialValue="3"
             readonly={true}
             size="20px"/>
             <span>11 reviews</span>
            </div>
            <div className="product-description" dangerouslySetInnerHTML={{__html: productDescription}} />
            <h4 className="product-price fw-semibold">₹3,149.00</h4>

        </div>
       
    </div>
</Container>

<Footer />
</section >)
}
export default ProductDescription;