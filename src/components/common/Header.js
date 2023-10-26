import { useState } from "react";
import { Container, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

import {CiSearch} from "react-icons/ci";
import {BsPerson,BsStar,BsCart} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
// import { FIoIosSearch, IoMdPerson, IoIosHeartEmpty, IoMdCart } from "react-icons/io";
import Signup from "../Signup/Signup";
const Header = () => {
    const [openForm,setOpenForm] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenuOpen = () => {
        setMobileMenu(true);
    }
    const handleMobileMenuClose = () => {
        setMobileMenu(false);
    }

    // Tabs Component
    const HeaderMenus = () => {
        const [activeSubMenu, setActiveSubMenu] = useState(null);

        const handleMenuHover = (submenuId) => {
          setActiveSubMenu(submenuId);
        };
      
        const handleMenuLeave = () => {
          setActiveSubMenu(null);
        };
        return (
            <Container className="tabs-section d-flex justify-content-between align-items-center p-2">
               {[1,2,3,4,5].map((item,index)=>{
                return( <div className="menu-item" key={index}
                onMouseEnter={() => handleMenuHover(index)}
                style={{borderBottom: activeSubMenu === index && "2.5px solid #000"}}
                >
                    <Link to="/product-listing" className="tab-link">shop now</Link>
                   {activeSubMenu === index && 
                   <div  className="submenu-wrapper" onMouseLeave={handleMenuLeave}> 
                        <div className="heading">
                        <p >shop by fabric</p>
                        <p >shop by work</p>
                        <p >shop by color</p>
                        <p >shop by type</p>
                        </div>
                        
                        <div className="submenus">
                        {[1,2,3,4].map((item,index)=>{
                            return(
                                <div key={index} >
                                    <Link to="/product-listing/wedding-sarees">Wedding Sarees</Link>
                                    <Link to="product-listing/wedding-sarees">Banarasi Sarees</Link>
                                    <Link to="product-listing/wedding-sarees">Party Wear Sarees</Link>
                                </div>
                            )
                        })}
                        </div>

                        <div className="footer" style={{borderTop:"1px solid #f1f0f0"}}>
                        <p >shop by fabric</p>
                        <p >shop by work</p>
                        <p >shop by color</p>
                        <p >shop by type</p>
                        </div>
                   </div>}
                </div>)
               })}
            </Container>
        )
    }

    const handleOpenForm = () => setOpenForm(true);
    const UserActions = () =>{
       return( 
       <div className="user-actions d-flex gap-md-4 gap-2">
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Search</Tooltip>}>
           <CiSearch className="icon"/>
       </OverlayTrigger>
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sign In</Tooltip>}>
           <BsPerson onClick={handleOpenForm} className="icon"/>
       </OverlayTrigger>
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">My Wishlist</Tooltip>}>
           <BsStar className="icon"/>
       </OverlayTrigger>
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Cart</Tooltip>}>
           <BsCart className="icon"/>
       </OverlayTrigger>
       </div>)
    }
    return (<section className="header-section" >
        {/* Top Header Wrapper */}
        <Signup openForm={openForm} setOpenForm={setOpenForm} />
        <Container fluid className="desktop-header d-none d-md-block" >
            <Container fluid >
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
                            <HeaderMenus />
                        </div>
                        <UserActions/>
                       </div>
                </Container>
            </Container>
        </Container>

        <Container fluid className="mobile-header d-block d-md-none p-2 d-flex justify-content-between align-items-center" style={{
            boxShadow: "0 2px 10px rgba(0, 0, 0, .08)",
            height: "56px"
        }}>
                <GiHamburgerMenu className="icons" onClick={handleMobileMenuOpen}/>
                  <Link to="/">
                    <div className="brandLogo" style={{ width: "50px" }}>
                        <img src="https://static.wixstatic.com/media/d5ac00_203b403d456d4d618b216ac6e5b97db1~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AORA_LOGO-removebg-preview.png"
                            width="100%"
                            alt="Aora_logo" />
                    </div>
                </Link>
           <UserActions/>
        </Container>

        <Offcanvas className="d-block d-md-none" show={mobileMenu} onHide={handleMobileMenuClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Welcome Guest</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              
            </Offcanvas.Body>
        </Offcanvas>


    </section >
    )
}
export default Header;