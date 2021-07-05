import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Food = () => {
    const[Recipe, setRecipe] = useState([]);
    const[data, setData] = useState([]);
    const fetchRecipe = () => {
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=paneer&app_id=eabc8ee8&app_key=4d98b1b0c4340c48bc68b1b84a839892')
        .then(res=>res.json())
        .then(json=>{
            setRecipe(json.hits)
            setData(json)
        })
    }
    useEffect(()=>{
        fetchRecipe();
    },[])
    console.log(Recipe);
    console.log(data);
    return(
        <>
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