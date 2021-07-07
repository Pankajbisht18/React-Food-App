import { useState } from "react";
import ImgSlider from './ImgSlider';
import RecipeReviewCard from './Card';
import './css/card.css';

const Food = () => {
    const[Recipe, setRecipe] = useState([]);
    const[Search, setSearch] = useState();
    const[cuisineType, setCuisineType] = useState('');
    const handleText = (evt) => {
        setSearch(evt.target.value);
    }
    const handleCusineType = (evt) => {
        setCuisineType(evt.target.value);
    }
    const handleSearch = () => {
        if(cuisineType!=='') {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${Search}&app_id=eabc8ee8&app_key=4d98b1b0c4340c48bc68b1b84a839892&cuisineType=${cuisineType}`)
            .then(res=>res.json())
            .then(json=>{
                setRecipe(json.hits);
            })
        }
        else{
            alert("Select Cuisine Type");
        }
    }
    
    console.log(Recipe);
    return(
        <>
            <ImgSlider />
            <div className="container text-center py-4">
                <input 
                    type="text" 
                    placeholder="Enter recipe name"
                    className="form-control" 
                    onChange={handleText} 
                />
                <br />
                <label className="fw-bold">cuisine Type</label>
                <select name="cuisineType" className="form-select" onChange={handleCusineType}>
                    <option value="" selected>Select cuisine Type</option>
                    <option value="American">American</option>
                    <option value="Asian">Asian</option>
                    <option value="British">British</option>
                    <option value="Caribbean">Caribbean</option>
                    <option value="Central Europe">Central Europe</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Eastern Europe">Eastern Europe</option>
                    <option value="French">French</option>
                    <option value="Indian">Indian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Kosher">Kosher</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="Nordic">Nordic</option>
                    <option value="South American">South American</option>
                    <option value="South East Asian">South East Asian</option>
                </select>
                <button className="btn btn-primary my-2" onClick={handleSearch}>Search</button>
            </div>
            <div className="container d-flex flex-wrap justify-content-around align-items-center">
                {
                    Recipe.map((food,id)=>{
                        return(
                            <div>
                                    <RecipeReviewCard 
                                        key={id}
                                        label={food.recipe.label}
                                        image={food.recipe.image}
                                        mealType={food.recipe.mealType}
                                        cuisineType={food.recipe.cuisineType}
                                        DishType={food.recipe.dishType}
                                        ingredient={food.recipe.ingredientLines}
                                        url={food.recipe.url}
                                    /> 
                            </div>   
                        )
                    })
                }
            </div>
        </>
    );
}
export default Food;