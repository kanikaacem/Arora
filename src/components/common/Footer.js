import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
    return (<section className="footer-section bg-dark text-light p-3">
        <Container className="d-flex ">
            <div className="row">
                <div className="col-md-3 col-12 p-4">
                    <p> Contact us</p>
                    <p className="d-flex gap-2 address">
                        41, Second Floor, Navjivan Industrial,
                        Society, Near Unique Hospital,
                        Khatodara, Laxmi Nagar, Udhna,
                        Surat, Gujarat 395002
                    </p>
                    <p className="d-flex gap-2 email">
                        email
                    </p>
                    <p className="d-flex gap-2 mobile-number">
                        mobile number
                    </p>

                </div>
                <div className="col-md-2 col-12 d-flex flex-column gap-4">
                    <p> Heading</p>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>

                </div>
                <div className="col-md-2 col-12 d-flex flex-column gap-4">
                    <p> Heading</p>

                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>

                </div>
                <div className="col-md-2 col-12 d-flex flex-column gap-4">
                    <p> Heading</p>

                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>
                    <Link to="" className="footer-link">LInk</Link>

                </div>
                <div className="col-md-3 col-12 p-2">
                    <p>Newsletter Signup</p>
                    <p>Subscribe to our newsletter and get latest offers and news.</p>
                </div>
            </div>
        </Container>
    </section >
    )
}
export default Footer;