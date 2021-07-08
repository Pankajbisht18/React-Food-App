import { Link } from "react-router-dom";
import Footer from "./Footer";
import ImgSlider from "./ImgSlider";
const Error = () => {
    return(
        <>
            <ImgSlider />
            <div className="container my-4">
                <h1 className="text-center">Page Not Found</h1>
                <Link to="/">
                    <u><h4 className="text-center"> Go to Home page
                    </h4></u>
                </Link>
                
            </div>
            <Footer />
        </>
    );
}
export default Error;