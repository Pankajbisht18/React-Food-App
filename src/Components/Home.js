import ImgSlider from './ImgSlider';
import './css/Home.css';
import Footer from './Footer';
const Home = () => {
    return(
        <>
            <ImgSlider />
            <div className="home-food">
                <div className="home-content">
                    <h1>Food...!</h1>
                    <p>Though the field of medicine continues to advance and branch out in many ways, nutritionists and health experts continue to praise the benefits of certain foods. In fact, eating healthfully has been shown to reduce the risk of obesity, cardiovascular illnesses, and even certain types of cancer.</p>
                    <br />
                    <p>A healthful diet typically includes nutrient-dense foods from all major food groups, including lean proteins, whole grains, healthful fats, and fruits and vegetables of many colors.
                    </p>
                    <br />
                    <p>
                    A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein, and other whole foods, you’ll have meals that are colorful, versatile, and good for you.
                    </p>
                </div>
                <div className="home-image">
                    <img src="/images/food.jpg" alt="Food" />
                </div>
            </div>
            <div className="home-food">
                <div className="home-image">
                    <img src="/images/About us.jpg" alt="Food" />
                </div>
                <div className="home-content">
                    <h1>About us</h1>
                    <p>Though the field of medicine continues to advance and branch out in many ways, nutritionists and health experts continue to praise the benefits of certain foods. In fact, eating healthfully has been shown to reduce the risk of obesity, cardiovascular illnesses, and even certain types of cancer.</p>
                    <br />
                    <p>A healthful diet typically includes nutrient-dense foods from all major food groups, including lean proteins, whole grains, healthful fats, and fruits and vegetables of many colors.
                    </p>
                    <br />
                    <p>
                    A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein, and other whole foods, you’ll have meals that are colorful, versatile, and good for you.
                    </p>
                </div>
            </div>
            <div 
                className="container-fluid my-5" 
                style={{
                    backgroundImage:'url(/images/contact.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height:'500px',
                }}
            >   
            </div>
            <div className="container my-5 contact">
                <h1 className="text-center">Contact Us</h1>
                <form>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter your Name" 
                    />
                    <input 
                        type="email"
                        className="form-control my-3"
                        placeholder="Enter your Email"
                    />
                    <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                    <button className="btn btn-danger d-block m-auto mt-3">
                        Send
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
export default Home;