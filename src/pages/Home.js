import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Carousel as BCarousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Category from "../components/common/Category";
import Product from "../components/common/Product";
import SectionHeading from '../components/common/SectionHeading';
import Testimonial from '../components/Home/Testimonial';
import Blog from "../components/Home/Blog";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home = () => {
    const productresponsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className="homepage-section ">
            <Header />
            <Container fluid className="p-0">
                <BCarousel>
                    {[1, 2, 3].map((item) => {
                        return (<BCarousel.Item key={item} className="w-100">
                            <img
                                class="image"
                                src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_8.jpg"
                                alt="banner_name"
                                width="100%"
                                height="100%" />
                        </BCarousel.Item>)
                    })}
                </BCarousel>
            </Container>
            {/* Second section */}
            <Container className="d-flex flex-md-row flex-column gap-4 my-3 align-items-center ">
                <div class="col-md-3 col-12 d-flex flex-md-column flex-row gap-3">
                    <Category />
                    <Category />
                </div>
                <div className="col-md-6 col-12">
                    <Category />
                </div>
                <div class="col-md-3 col-12 d-flex flex-md-column flex-row gap-3">
                    <Category />
                    <Category />

                </div>
            </Container>
            {/* third Section */}
            <Container className="my-3">
                <SectionHeading heading="trending" />
                <p style={{ color: "#666" }} className="text-center"><em>Top view in this week</em></p>
                <Carousel responsive={productresponsive}
                    itemClass="multiCarouselItem"
                    // autoPlay={true}
                    showDots={true}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (<Product key={item} />)
                    })}
                </Carousel>
            </Container>

            {/* fourth Section */}
            <Container className="my-3 d-flex justify-content-center">
                <div className="row">
                    {[1, 2].map((item) => {
                        return (
                            <div className="col-md-6 col-12">
                                <Link to="">
                                    <div className="productImageContainer">
                                        <img src="https://www.ethnicplus.in/media/wysiwyg/16-01-23_1.jpg"
                                            alt="bannerImage"
                                            className="productImage"
                                            width="100%" />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Container>

            {/* Fifth Section */}
            <Container className="my-3">
                <SectionHeading heading="best seller" />
                <p style={{ color: "#666" }} className="text-center"><em>Top sale in this week</em></p>
                <Carousel responsive={productresponsive}
                    itemClass="multiCarouselItem"
                    // autoPlay={true}
                    showDots={true}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (<Product key={item} />)
                    })}
                </Carousel>
            </Container>

            {/* Testimonials */}
            <Container className="my-3">
                <SectionHeading heading="happy customers" />
                <Carousel responsive={responsive}
                    itemClass="multiCarouselItem"
                    autoPlay={true}
                    showDots={true}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (<Testimonial key={item} />)
                    })}
                </Carousel>
            </Container>

            {/* Blogs  */}
            <Container className="my-3">
                <SectionHeading heading="LATEST FROM BLOG" />
                <p style={{ color: "#666" }} className="text-center"><em>The freshest and most exciting news</em></p>
                <Carousel responsive={responsive}
                    itemClass="multiCarouselItem"
                    autoPlay={true}
                    style={{ minHeight: "500px" }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (<Blog key={item} />)
                    })}
                </Carousel>
            </Container>

            <Footer />
        </section >)
}
export default Home;