import { useState } from "react";
import { Container, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { FIoIosSearch, IoMdPerson, IoIosHeartEmpty, IoMdCart } from "react-icons/io";
import Signup from "../Signup/Signup";
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenuOpen = () => {
        setMobileMenu(true);
    }
    const handleMobileMenuClose = () => {
        setMobileMenu(false);
    }

    // Tabs Component
    const TabComponent = () => {
        return (
            <Container className="tabs-section d-flex justify-content-between align-items-center p-2">
                <Link to="/product-listing" className="tab-link">shop now</Link>
                <Link to="" className="tab-link">men</Link>
                <Link to="" className="tab-link">women</Link>
                <Link to="" className="tab-link">accessories</Link>
                <Link to="" className="tab-link">live now</Link>
                <Link to="" className="tab-link">official merch</Link>
                <Link to="" className="tab-link">plus size</Link>
            </Container>
        )
    }
    return (<section className="header-section" style={{ position: "sticky", top: 0, zIndex: 3834, background: "#fff" }}>
        {/* Top Header Wrapper */}
        {/* <Signup /> */}
        <Container fluid className="desktop-header d-none d-md-block" >
            <Container fluid style={{ borderBottom: "2px solid #eee" }}>
                <Container>
                    <div className="mainHeaderWrapper d-flex justify-content-between align-items-center">
                        <Link to="/" className="col-1">
                            <div className="brandLogo" style={{ width: "80px" }}>
                                <img src="https://static.wixstatic.com/media/d5ac00_203b403d456d4d618b216ac6e5b97db1~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AORA_LOGO-removebg-preview.png"
                                    width="100%"
                                    alt="Aora_logo" />
                            </div>
                        </Link>
                        <div className="Menus col-8">
                            <TabComponent />
                        </div>

                    </div>
                </Container>
            </Container>
        </Container>

        <Container fluid className="mobile-header d-block d-md-none p-2 d-flex justify-content-between align-items-center" style={{
            boxShadow: "0 2px 10px rgba(0, 0, 0, .08)",
            height: "56px"
        }}>
            <div className="d-flex align-items-center">
                <div className="brandLogo" style={{ width: "30px" }} onClick={handleMobileMenuOpen}>
                    <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg"
                        width="100%"
                        alt="Aora_logo" />
                </div>
                <Link to="/">
                    <div className="brandLogo" style={{ width: "50px" }}>
                        <img src="https://static.wixstatic.com/media/d5ac00_203b403d456d4d618b216ac6e5b97db1~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AORA_LOGO-removebg-preview.png"
                            width="100%"
                            alt="Aora_logo" />
                    </div>
                </Link>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <Link to="" className="menu-link">Login</Link>
                <Link to="" className="menu-link">Wishlist</Link>
                <Link to="" className="menu-link">Cart</Link>
            </div>
        </Container>

        <Offcanvas className="d-block d-md-none" show={mobileMenu} onHide={handleMobileMenuClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Welcome Guest</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>


    </section >
    )
}
export default Header;