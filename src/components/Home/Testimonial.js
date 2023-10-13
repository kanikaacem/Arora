import { useState } from "react";
const Testimonial = () => {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(!showMore);
    }
    return (
        <div className="testimonial p-3 ">
            <div className="testimonial-data d-flex flex-row gap-2">
                <div className="col-8">
                    <p className="testiomonial-name fw-bold">Testimonial Name</p>
                    <p className="testimonial-content">I wore this lehenga and it was looking soo good.. Thank ???? {showMore && <> This is the show more data</>}</p>
                    <p className="showMore" style={{ color: "#e90e8c", cursor: "pointer" }} onClick={handleShowMore}> {showMore ? "Show Less" : "Show More"}</p>

                </div>
                <div className="col-4 p-2">
                    <img src="https://www.ethnicplus.in/media/blueskytechco/testimonial/e/z/ezgif-1-d9debcc4b8.jpg"
                        alt="testimonial" width="100%" />
                </div>
            </div>

            <div className="testimonial-job">Customer</div>
        </div>
    )
}

export default Testimonial;