import { Link } from "react-router-dom";
const Blog = () => {
    return (<div className="blog p-3 ">
        <Link to="" className="customize-link">
            <div className="blogContainer">
                <img className="blogImage"
                    src="https://www.ethnicplus.in/media/magefan_blog/ezgif-1-3cdb715a1a.webp"
                    alt="Image" />
                <div className="blogBottomSection mt-3">
                    <p className="fw-bold blog-data">
                        NEWS
                    </p>
                    <p className="fw-bold blog-data">
                        Diwali Engagement Fashion: Elevating Your Gown to Make it Special
                    </p>

                </div>
            </div>

        </Link>

    </div>)
}
export default Blog;