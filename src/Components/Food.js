import { useState } from "react";
import {Link} from 'react-router-dom';

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
                setRecipe(json.hits)
            })
        }
        else{
            alert("Select Cuisine Type");
        }
    }
    
    console.log(Recipe);
    return(
        <>
            <div>
                <input type="text" placeholder="Enter recipe name" onChange={handleText} />
                <label>cuisine Type</label>
                <select name="cuisineType" onChange={handleCusineType}>
                    <option value=""></option>
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
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
            {
                Recipe.map((food,id)=>{
                    return(
                        <div key={id}>
                            <img src={food.recipe.image} alt={food.recipe.label}/>
                            <h1>{food.recipe.label}</h1>
                            <Link to="/recipe">
                                <button className="btn">
                                    Read Recipe
                                </button>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}
export default Food;