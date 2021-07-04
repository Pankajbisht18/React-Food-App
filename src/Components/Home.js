import ImgSlider from './ImgSlider';
import './css/Home.css';
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
        </>

    );
}
export default Home;