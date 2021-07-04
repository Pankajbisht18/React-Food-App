import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './css/Slider.css';
const ImgSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return(
        <Slider {...settings} className="slider">
            <div>
                <img src="/images/Slider-img-1.jpg" alt="slider-1" />
            </div>
            <div>
                <img src="/images/Slider-img-2.jpg" alt="Slider-2" />
            </div>
            <div>
                <img src="/images/Slider-img-3.jpg" alt="Slider-3" />
            </div>
            <div>
                <img src="/images/Slider-img-4.jpg" alt="Slider-4" />
            </div>
            <div>
                <img src="/images/Slider-img-5.jpg" alt="Slider-5" />
            </div>
        </Slider>
    );
}
export default ImgSlider;