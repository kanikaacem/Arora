import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Product from "../components/common/Product";
import { Container, Pagination } from "react-bootstrap";
const ProductListing = () => {
    let productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
    let [productContainerWidth, setProductContainerWidth] = useState(385);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(productList?.length / itemsPerPage);
    // Calculate the indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    productList = productList?.slice(startIndex, endIndex);
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //Changing the Product Grid 
    const changeProductGrid = (gridValue) => {
        console.log(gridValue)
        gridValue === 2 && setProductContainerWidth(570);
        gridValue === 3 && setProductContainerWidth(380);
        gridValue === 4 && setProductContainerWidth(280);
        gridValue === 5 && setProductContainerWidth(225);

    }
    return (<section className="product-listing-section">
        <Header />
        <Container fluid className="product-banner p-0">
            <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/3/_/3_wedding_saree_copy_2.jpg"
                alt="bannerImage"
                width="100%" />
        </Container>
        <Container className="d-flex justify-content-center" style={{ maxWidth: "1600px" }}>
            <div className="row">
                <div className="product-filter col-3">
                    Filter

                </div>
                <div className="all-products-section col-9 ">
                    <div className="product-actions d-flex justify-content-between my-4">
                        <span className="products-amount" style={{ color: "#666" }}>Items 1-36 of 197 </span>
                        <div className="toolbar d-flex gap-2">
                            <div className="product-sortor">
                                <select name="product-sorter" className="product-sorter" id="product-sorter">
                                    <option value="volvo">Best Seller</option>
                                    <option value="saab">Mostly Viewed</option>
                                    <option value="mercedes">New</option>
                                    <option value="audi">Price: low to high</option>
                                    <option value="audi">Price: high to low</option>

                                </select>
                            </div>

                            <div className="d-flex gap-2">
                                <div onClick={() => changeProductGrid(2)}>Grid 2</div>
                                <div onClick={() => changeProductGrid(3)}>Grid 3</div>
                                <div onClick={() => changeProductGrid(4)}>Grid 4</div>
                                <div onClick={() => changeProductGrid(5)}>Grid 5</div>
                            </div>
                        </div>
                    </div>
                    <div className="products d-flex flex-row flex-wrap gap-2">
                        {productList.map((item, index) => {
                            return (
                                <div style={{ maxWidth: `${productContainerWidth}px` }} key={index}>
                                    <Product />
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="product-pagination my-3">
                    <Pagination className="justify-content-center">
                        <Pagination.Prev
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}

                        />
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={currentPage === index + 1}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        />
                    </Pagination>
                </div>
            </div>
        </Container>

        <Footer />
    </section >)
}

export default ProductListing;